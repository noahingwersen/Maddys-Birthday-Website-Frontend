import ProfileSettings from './components/ProfileSettings'
import ProfileStats from './components/ProfileStats'

const ProfilePage = () => {
  return (
    <div className="bg-white w-full h-full flex flex-row">
      <div className="flex flex-row h-full w-fit">
        <ProfileSettings />
        <ProfileStats />
      </div>
    </div>
  )
}
export default ProfilePage
