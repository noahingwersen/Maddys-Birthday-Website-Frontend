import ProfileSettings from './components/ProfileSettings'
import ProfileStats from './components/ProfileStats'

const ProfilePage = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <div className="bg-blue-400 flex flex-col h-full w-full sm:h-fit sm:w-fit sm:rounded-lg sm:outline p-2 overflow-y-auto">
        <ProfileSettings />
        <ProfileStats />
      </div>
    </div>
  )
}
export default ProfilePage
