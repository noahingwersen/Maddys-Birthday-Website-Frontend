import Feed from "./components/Feed"
import FeedHeader from "./components/FeedHeader"

const FeedPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto bg-gray-100 sm:bg-blue-400">
      <FeedHeader />
      <Feed />
      <p className="my-5">No more posts to show</p>
    </div>
  )
}
export default FeedPage