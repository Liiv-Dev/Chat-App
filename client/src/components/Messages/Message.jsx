import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleColor = fromMe ? 'bg-green-800' : 'bg-gray-800';

  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>

      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="User Avatar"/>
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className="chat-header text-xs text-white opacity-80">{formattedTime}</div>
    </div>
  )
}

export default Message