import useApiData from "../../../hooks/useApiData"
import Message from "./Message"

const Feed = () => {
    const [messagesLoading, messages, messageErrors] = useApiData('messages', {sort: 'user', expand: 'user'})
    const [picturesLoading, pictures, pictureErrors] = useApiData('pictures', {sort: 'user', expand: 'user'})


  return (
    <div>
        {messages && messages.map((message) => {
          return <Message key={message.id} user={message.expand.user} text={message.text} time={new Date(message.updated)}/>
        })}
    </div>
  )
}
export default Feed