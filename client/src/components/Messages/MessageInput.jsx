import { FiSend } from "react-icons/fi";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {loading, sendMessage} = useSendMessage();

  // handle form submission to send a message
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-green-800 text-white" placeholder="Send a message" 
          value={message} onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <div className="loader" /> : <FiSend className="text-2xl text-white" />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput