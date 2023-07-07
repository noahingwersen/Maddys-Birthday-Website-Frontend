import Feed from "./components/Feed"
import FeedHeader from "./components/FeedHeader"

const FeedPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto bg-blue-400">
      <FeedHeader />
      <Feed />
      <p className="mb-5">No more posts to show</p>
    </div>
  )
}
export default FeedPage