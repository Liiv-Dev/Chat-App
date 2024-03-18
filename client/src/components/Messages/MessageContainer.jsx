import { AiTwotoneMessage } from "react-icons/ai";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";


const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // Cleanup function to reset selectedConversation
    return () => {
      setSelectedConversation(null);
    }
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
      <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-green-800 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{' '}
            <span className="text-white font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer

{/* If no chat is selected, show this message */}
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-green-800 font-semibold flex flex-col items-center gap-2">
        <p>Hello User👋🏾!</p>
        <p>Select a chat to start a Convo</p>
        <AiTwotoneMessage className="text-9xl text-green-800" />
      </div>

    </div>
  )
}