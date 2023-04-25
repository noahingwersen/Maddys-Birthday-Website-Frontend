import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/register/RegisterPage'
import ContributePage from './pages/contribute/ContributePage'
import AboutPage from './pages/about/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col h-full">
          <Navbar />
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<RegisterPage />} path="/register" />
            <Route element={<LoginPage />} path="/login" />
            <Route
              element={<PrivateRoute children={<ContributePage />} />}
              path="/contribute"
            />
            <Route
              element={<PrivateRoute children={<ProfilePage />} />}
              path="/profile"
            />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
