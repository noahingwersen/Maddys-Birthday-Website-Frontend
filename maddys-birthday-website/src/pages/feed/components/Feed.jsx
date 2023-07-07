import useApiData from "../../../hooks/useApiData"
import { pb } from "../../../api/pocketBase"
import Post from "./Post"
import { useEffect, useState } from "react"

const Feed = () => {
    const [messagesLoading, messages, messageErrors] = useApiData('messages', {sort: 'user', expand: 'user'})
    const [picturesLoading, pictures, pictureErrors] = useApiData('pictures', {sort: 'user', expand: 'user'})

    const [posts, setPosts] = useState([])

    useEffect(() => {
      if (messages && pictures) {
        const newPosts = messages.concat(pictures)

        newPosts.sort((a, b) => {
          const dateA = new Date(a.updated)
          const dateB = new Date(b.updated)

          return dateA-dateB
        })

        setPosts(newPosts)
      }
    
    }, [messages, pictures])
    

  return (
    <div>
      {posts && posts.map((post) => {
        let content
        if (post.collectionName == 'messages') {
          content = <p>{post.text}</p>
        } else if (post.collectionName == 'pictures') {
          content = <img className="w-full object-contain" src={pb.getFileUrl(post, post.image)}/>
        } else {
          console.log(`Unknown collection: ${post.collectionName}`)
          return
        }

        return <Post key={post.id} user={post.expand.user} time={new Date(post.updated)} content={content}/>
      })}
    </div>
  )
}
export default Feed