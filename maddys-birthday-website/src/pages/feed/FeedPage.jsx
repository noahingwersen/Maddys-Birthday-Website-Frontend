import Feed from "./components/Feed"
import FeedHeader from "./components/FeedHeader"

const FeedPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto bg-blue-400">
      <FeedHeader />
      <Feed />
    </div>
  )
}
export default FeedPage