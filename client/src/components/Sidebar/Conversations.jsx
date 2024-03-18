import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"
import getRandomEmoji from "../../utils/emojis"

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-y-auto'>

  {conversations.map((conversation, index) => {
    return (
      <Conversation 
        key={conversation._id} 
        conversation={conversation} 
        emoji={getRandomEmoji()}
        lastIndex={index === conversations.length - 1}
      />
    )
  })}

      {loading ? <span className='loading loading-lg'></span> : null}
    </div>
  )
}

export default Conversations