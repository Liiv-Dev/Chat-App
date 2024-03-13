import { AiTwotoneMessage } from "react-icons/ai";
import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
      <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-green-800 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{' '}
            <span className="text-white font-bold">Will</span>
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