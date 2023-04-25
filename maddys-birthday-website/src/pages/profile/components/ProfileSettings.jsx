import { useState } from 'react'
import { pb } from '../../../api/pocketBase'

const ProfileSettings = () => {
  const [name, setName] = useState(pb.authStore.model.name)
  const [email, setEmail] = useState(pb.authStore.model.email)

  const changed =
    name !== pb.authStore.model.name || email !== pb.authStore.model.email

  const update = async (e) => {}

  return (
    <div className="flex flex-col items-center border-2 p-3 border-gray-400">
      <label forHtml="imageUpload" className="hover:cursor-pointer">
        <img
          className="h-40 w-40 mb-2 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <input type="file" id="imageUpload" hidden />
      </label>
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
      <button
        className="border-2 border-green-600 py-1 px-3 w-full rounded-md text-green-600 hover:bg-green-600 hover:text-white disabled:border-none disabled:bg-gray-400 disabled:text-white"
        disabled={!changed}
      >
        Update
      </button>
    </div>
  )
}
export default ProfileSettings
