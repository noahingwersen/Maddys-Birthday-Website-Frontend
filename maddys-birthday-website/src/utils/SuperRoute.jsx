import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const SuperRoute = ({ children }) => {
  const { user } = useAuth()
  return user.super ? children : <Navigate to="/denied" />
}

export default SuperRoute
