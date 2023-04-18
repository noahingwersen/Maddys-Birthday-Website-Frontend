import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth()
  return loggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute
