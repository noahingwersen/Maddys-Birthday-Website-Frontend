import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import LoginPage from './pages/login/LoginPage'
import MainPage from './pages/main/MainPage'
import RegisterPage from './pages/register/RegisterPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full">
        <Navbar />
        <Routes>
          <Route element={<MainPage />} path="/" exact />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<LoginPage />} path="/login" />
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
    </Router>
  )
}

export default App
