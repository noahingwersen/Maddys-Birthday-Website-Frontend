import Feed from "./components/Feed"
import FeedHeader from "./components/FeedHeader"

const FeedPage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-white items-center">
      <FeedHeader />
      <Feed />
    </div>
  )
}
export default FeedPage