import Feed from "./components/Feed"
import FeedFooter from "./components/FeedFooter"
import FeedHeader from "./components/FeedHeader"

const FeedPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto bg-gray-100 sm:bg-blue-400">
      <FeedHeader />
      <Feed />
      <FeedFooter />
    </div>
  )
}
export default FeedPage