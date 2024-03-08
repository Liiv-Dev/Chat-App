import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    default: [],
  }],
  // createdAt and updatedAt fields
}, { timestamps: true });

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;