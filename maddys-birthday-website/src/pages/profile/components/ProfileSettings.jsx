import { useState, useEffect, useRef } from 'react'
import { pb } from '../../../api/pocketBase'
import useAuth from '../../../hooks/useAuth'
import SubmitButton from '../../../components/SubmitButton'
import { toast } from 'react-toastify'

const ProfileSettings = () => {
  const { user, setUser, avatar, setAvatar, getAvatarURL } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [loading, setLoading] = useState(false)
  const avatarImage = useRef(null)

  const changed = name !== user.name || email !== user.email || avatar !== getAvatarURL()

  const updateAvatar = (e) => {
    if (e.target.files[0]) {
      avatarImage.current = e.target.files[0]
      setAvatar(URL.createObjectURL(e.target.files[0]))
    }
  }
  
  const update = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      const form = new FormData()
      form.append('avatar', avatarImage.current)
      form.append('name', name)
      form.append('email', email)

      const updatedUser = await pb.collection('users').update(user.id, form)
      setUser(updatedUser)
      toast.success('Profile updated!')
    } catch (error) {
      toast.error('Unable to update profile')
      setAvatar(getAvatarURL())
    }
    
    setLoading(false)
  }

  return (
    <div className="flex flex-col p-3 w-full">
      <div className="flex flex-col items-center">
        <label htmlFor="imageUpload" className="hover:cursor-pointer">
          <div className="absolute items-center h-40 w-40 rounded-full bg-black transition-opacity ease-in duration-450 opacity-0 hover:opacity-50">
            <h3 className="text-center relative top-[50%] font-semibold text-white">Click to Edit</h3>
          </div>
          <img
            className="h-40 w-40 mb-2 object-cover rounded-full bg-white"
            src={avatar}
          />
          <input accept="image/*" type="file" id="imageUpload" onChange={updateAvatar} hidden />
        </label>
      </div>
      <form onSubmit={update}>
        <div className="flex flex-col mt-2 w-full">
          <label htmlFor="fullName">Name</label>
          <input
            id="fullName"
            className="my-2 rounded-md text-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="my-2 rounded-md text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <SubmitButton
          disabled={!changed || loading}
          loading={loading}
          className="bg-green-600 hover:bg-green-500 text-white disabled:border-none disabled:bg-gray-300 disabled:text-gray-600"
          text="Update"
        />
      </form>
    </div>
  )
}
export default ProfileSettings
