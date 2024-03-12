import Messages from "./Messages"

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
      {/* Header */}
      <div className="bg-green-800 px-4 py-2 mb-2">
        <span className="label-text">To:</span>{' '}
        <span className="text-white font-bold">Will</span>
      </div>

      <Messages />
      {/* <MessageInput /> */}
      
      </>
    </div>
  )
}

export default MessageContainer