import useApiData from "../../../hooks/useApiData"
import Message from "./Message"
import Picture from "./Picture"

const Feed = () => {
    const [messagesLoading, messages, messageErrors] = useApiData('messages', {sort: 'user', expand: 'user'})
    const [picturesLoading, pictures, pictureErrors] = useApiData('pictures', {sort: 'user', expand: 'user'})


  return (
    <div>
        {pictures && pictures.map((picture) => {
          return <Picture key={picture.id} user={picture.expand.user} id={picture.id} collectionID={picture.collectionId} image={picture.image} time={new Date(picture.updated)}/>
        })}

        {messages && messages.map((message) => {
          return <Message key={message.id} user={message.expand.user} text={message.text} time={new Date(message.updated)}/>
        })}
    </div>
  )
}
export default Feed