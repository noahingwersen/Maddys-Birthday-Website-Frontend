import { pb } from '../../../api/pocketBase'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SubmitButton from '../../../components/SubmitButton'
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      emailVisibility: false,
      password: e.target.password.value,
      passwordConfirm: e.target.password.value,
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
    }

    try {
      await pb.collection('users').create(userData)
      toast.success('Account created!')
      navigate('/contribute')
    } catch (error) {
      console.log(error)
      toast.error('Unable to create account')
    }
    setLoading(false)
  }

  return (
    <div className="w-full h-full sm:w-auto sm:h-auto outline-1 sm:outline bg-blue-400 p-10 sm:rounded-lg">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-semibold">Register</h1>
      </div>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label htmlFor="firstNameInput" className="">
            First Name
          </label>
          <input
            type="text"
            className="w-full rounded"
            id="firstNameInput"
            name="firstName"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastNameInput" className="">
            Last Name
          </label>
          <input
            type="text"
            className="w-full rounded"
            id="lastNameInput"
            name="lastName"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailInput" className="">
            Email address
          </label>
          <input
            type="email"
            className="w-full rounded"
            id="emailInput"
            placeholder="me@example.com"
            name="email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passwordInput" className="">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded"
            id="passwordInput"
            name="password"
            required
            minLength={8}
            maxLength={72}
          />
        </div>

        <div className="mb-4">
          <SubmitButton
            loading={loading}
            disabled={loading}
            className="text-white bg-zinc-800 hover:bg-zinc-700 px-6 py-2 disabled:bg-zinc-700"
            text="Register"
          />
        </div>
        <div>
          Already have an account?{' '}
          <Link to="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}
export default RegisterForm
