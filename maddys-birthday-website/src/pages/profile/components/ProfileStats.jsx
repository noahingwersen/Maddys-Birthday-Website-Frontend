import useApiData from "../../../hooks/useApiData"

const ProfileStats = () => {
  const [messageLoading, messages, messageErrors] = useApiData('messages')
  const [pictureLoading, pictures, pictureErrors] = useApiData('pictures')

  return (
    <div className="p-2 m-2">
      <h1 className="text-3xl font-bold">Contributions</h1>
      <h3>Total messages submitted: {messageLoading ? "loading..." : messages && messages.length}</h3>
      <h3>Total pictures uploaded: {pictureLoading ? "loading..." : pictures && pictures.length}</h3>
    </div>
  )
}
export default ProfileStats
