import { createContext, useEffect, useState } from 'react'
import { pb } from '../api/pocketBase'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)
  const removeListener = pb.authStore.onChange(() =>
    setLoggedIn(pb.authStore.isValid)
  )

  const rememberMe = (value) => {
    if (value) {
      localStorage.setItem('rememberMe', String(value))
    } else {
      localStorage.removeItem('rememberMe')
    }
  }

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
    rememberMe: rememberMe,
    removeListener: removeListener,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
