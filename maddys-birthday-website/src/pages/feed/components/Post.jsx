import { pb } from '../../../api/pocketBase'

const Post = ({ user, time, content }) => {
  let userAvatar
  if (user.avatar) {
    userAvatar = pb.getFileUrl(user, user.avatar)
  } else {
    userAvatar =
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }
  const dateOptions = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  const timestamp = time.toLocaleDateString('en-US', dateOptions)

  return (
    <div className="sm:bg-gray-200 flex flex-col max-w-[450px] p-4 border sm:border-none sm:my-8 sm:rounded-md sm:w-[450px] w-full">
      <div className="flex flex-row mb-4">
        <img
          className="h-20 w-20 rounded-full object-cover me-4"
          src={userAvatar}
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">{user.name}</h1>
          <p className="text-gray-500">{timestamp}</p>
        </div>
      </div>
      {content}
    </div>
  )
}
export default Post
