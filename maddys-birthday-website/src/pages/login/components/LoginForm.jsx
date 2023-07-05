import { pb } from '../../../api/pocketBase'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SubmitButton from '../../../components/SubmitButton'
import { toast } from 'react-toastify'
import useAuth from '../../../hooks/useAuth'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { rememberMe } = useAuth()

  const login = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      await pb
        .collection('users')
        .authWithPassword(e.target.email.value, e.target.password.value)

      rememberMe(e.target.rememberCheck.checked)
      navigate('/contribute')
    } catch (error) {
      let message
      if (error.status == 400) {
        message = 'Invalid email or password'
      } else {
        message = 'An unknown error has occurred'
      }
      toast.error(message)
    }

    setLoading(false)
  }

  return (
    <div className="w-full h-full sm:w-auto sm:h-auto outline-1 sm:outline bg-blue-400 p-10 sm:rounded-lg">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-semibold">Sign In</h1>
      </div>
      <form onSubmit={login}>
        <div className="mb-4">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="w-full rounded"
            id="emailInput"
            name="email"
            placeholder="me@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="w-full rounded"
            id="passwordInput"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="mb-4">
          <SubmitButton
            loading={loading}
            text="Log In"
            disabled={loading}
            className="text-white bg-zinc-800 hover:bg-zinc-700 px-6 py-2 disabled:bg-zinc-700"
          />
        </div>

        <div className="mb-2 flex items-center justify-between">
          <div className="block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]"
              type="checkbox"
              name="rememberCheck"
              id="rememberCheck"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="rememberCheck"
            >
              Remember me
            </label>
          </div>

          <Link className="hover:underline" onClick={() => alert("Oops! I haven't figured out how to do this yet. Reach out to me directly if you want to change your password")}>
            Forgot password?
          </Link>
        </div>
        <div className="text-center lg:text-left">
          <p className="mb-0 mt-2 pt-1">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
