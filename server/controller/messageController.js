import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';
import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    })
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if(newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await newMessage.save();
    // await conversation.save();
    // new message and conversation will run in parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    // SOCKET.IO Functionality
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() is used to send a message to a specific client
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    res.status(201).json(newMessage);

  } catch (error) {
    console.log('Error in sendMessage Controller', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id:userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages'); // Not referrence but actual messages

    if (!conversation) return res.status(200).json([]);

    res.status(200).json(conversation.messages);

  } catch (error) {
    console.log('Error in getMessages Controller', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};