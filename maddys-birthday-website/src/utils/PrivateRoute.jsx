import { Navigate } from 'react-router-dom'
import { pb } from '../api/pocketBase'

const PrivateRoute = ({ children }) => {
  return pb.authStore.isValid ? children : <Navigate to="/" />
}

export default PrivateRoute
