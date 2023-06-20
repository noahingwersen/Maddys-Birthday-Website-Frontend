import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pb } from '../api/pocketBase'
import useAuth from '../hooks/useAuth'

const ProfileIcon = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const { avatar } = useAuth()

  return (
    <div
      className="relative ml-3"
      id="profile-menu"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShowProfileMenu(false)
        }
      }}
    >
      <button
        type="button"
        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src={avatar}
        />
      </button>
      <div
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        hidden={!showProfileMenu}
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex="-1"
        onClick={() => setShowProfileMenu(false)}
      >
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          Your Profile
        </Link>
        <Link
          to="/"
          onClick={() => pb.authStore.clear()}
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-2"
        >
          Sign out
        </Link>
      </div>
    </div>
  )
}
export default ProfileIcon
