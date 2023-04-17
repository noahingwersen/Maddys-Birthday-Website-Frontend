import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import MainPage from './pages/main/MainPage'
import RegisterPage from './pages/register/RegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainPage />} path="/" exact />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </Router>
  )
}

export default App
