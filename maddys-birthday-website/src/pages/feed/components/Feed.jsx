import useApiData from "../../../hooks/useApiData"
import { pb } from "../../../api/pocketBase"
import Post from "./Post"

const Feed = () => {
    const [messagesLoading, messages, messageErrors] = useApiData('messages', {sort: 'user', expand: 'user'})
    const [picturesLoading, pictures, pictureErrors] = useApiData('pictures', {sort: 'user', expand: 'user'})


  return (
    <div>
        {pictures && pictures.map((picture) => {
          const content = <img className="w-full object-contain" src={pb.getFileUrl(picture, picture.image)}/> 
          return <Post key={picture.id} user={picture.expand.user} time={new Date(picture.updated)} content={content}/>
        })}

        {messages && messages.map((message) => {
          const content = <p>{message.text}</p>
          return <Post key={message.id} user={message.expand.user} time={new Date(message.updated)} content={content}/>
        })}
    </div>
  )
}
export default Feed