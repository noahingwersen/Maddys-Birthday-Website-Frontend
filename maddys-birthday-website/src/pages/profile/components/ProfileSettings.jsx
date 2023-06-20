import { useState, useEffect, useRef } from 'react'
import { pb } from '../../../api/pocketBase'
import useAuth from '../../../hooks/useAuth'
import SubmitButton from '../../../components/SubmitButton'

const ProfileSettings = () => {
  const { user, setUser } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [avatar, setAvatar] = useState(pb.getFileUrl(user, user.avatar))
  const [loading, setLoading] = useState(false)
  const avatarImage = useRef(null)

  const changed = name !== user.name || email !== user.email || avatar !== pb.getFileUrl(user, user.avatar)

  const updateAvatar = (e) => {
    if (e.target.files[0]) {
      avatarImage.current = e.target.files[0]
      setAvatar(URL.createObjectURL(e.target.files[0]))
    }
  }

  useEffect(() => {
    setAvatar(pb.getFileUrl(user, user.avatar))
  
  }, [user])
  

  const update = async (e) => {
    setLoading(true)
    e.preventDefault()
    const form = new FormData()
    form.append('avatar', avatarImage.current)
    form.append('name', name)
    form.append('email', email)

    const updatedUser = await pb.collection('users').update(user.id, form)
    setUser(updatedUser)
    
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center p-3">
      <label htmlFor="imageUpload" className="hover:cursor-pointer">
        <div className="absolute w-40 h-40 rounded-full bg-black transition-opacity ease-in duration-450 opacity-0 hover:opacity-50">
          <h3 className="text-center relative top-[50%] font-semibold text-white">Click to Edit</h3>
        </div>
        <img
          className="h-40 w-40 mb-2 rounded-full"
          src={avatar}
        />
        <input accept="image/*" type="file" id="imageUpload" onChange={updateAvatar} hidden />
      </label>
      <form onSubmit={update}>
        <div className="flex flex-col mt-2">
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
          className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white disabled:border-none disabled:bg-gray-400 disabled:text-white"
          text="Update"
        />
      </form>
    </div>
  )
}
export default ProfileSettings
