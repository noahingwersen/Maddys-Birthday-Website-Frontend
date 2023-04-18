import { createContext, useState } from 'react'
import { pb } from '../api/pocketBase'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)
  const removeListener = pb.authStore.onChange(() =>
    setLoggedIn(pb.authStore.isValid)
  )

  const contextData = {
    loggedIn: loggedIn,
    removeListener: removeListener,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
