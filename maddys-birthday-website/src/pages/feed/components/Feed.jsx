import useApiData from "../../../hooks/useApiData"
import Message from "./Message"

const Feed = () => {
    const [messagesLoading, messages, messageErrors] = useApiData('messages', {sort: 'user'})
    const [picturesLoading, pictures, pictureErrors] = useApiData('pictures', {sort: 'user'})

  return (
    <div>
        {messages &&
        <Message userID={messages[0].user} text={messages[0].text}/>
        }
    </div>
  )
}
export default Feed