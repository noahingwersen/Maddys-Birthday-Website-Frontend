import { createContext, useEffect, useState } from 'react'
import { pb } from '../api/pocketBase'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)
  const [user, setUser] = useState(pb.authStore.model)
  const [avatar, setAvatar] = useState("")

  const removeListener = pb.authStore.onChange(() => {
    setLoggedIn(pb.authStore.isValid)
    setUser(pb.authStore.model)
  })

  const rememberMe = (value) => {
    if (value) {
      localStorage.setItem('rememberMe', String(value))
    } else {
      localStorage.removeItem('rememberMe')
    }
  }

  useEffect(() => {
    let avatarURL
    if (user && user.avatar) {
      avatarURL = pb.getFileUrl(user, user.avatar)
    } else {
      avatarURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

    setAvatar(avatarURL)
  }, [user])

  useEffect(() => {
    const logIn = localStorage.getItem('rememberMe')
      ? localStorage.getItem('rememberMe') === 'true'
      : false

    if (!logIn) {
      pb.authStore.clear()
    }
  }, [])

  const contextData = {
    loggedIn: loggedIn,
    user: user,
    avatar: avatar,
    setAvatar: setAvatar,
    setUser: setUser,
    rememberMe: rememberMe,
    removeListener: removeListener,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
