import { useState, useEffect } from 'react'
import { pb } from '../../../api/pocketBase'
import useAuth from '../../../hooks/useAuth'
import SubmitButton from '../../../components/SubmitButton'

const ProfileSettings = () => {
  const { user } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [loading, setLoading] = useState(false)

  const changed = name !== user.name || email !== user.email

  const update = async (e) => {
    setLoading(true)
    e.preventDefault()
    const data = {
      name: name,
      email: email,
    }

    await pb.collection('users').update(user.id, data)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center p-3">
      <label htmlFor="imageUpload" className="hover:cursor-pointer">
        <img
          className="h-40 w-40 mb-2 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <input type="file" id="imageUpload" hidden />
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
