import { pb } from '../api/pocketBase'

const RegisterForm = () => {
  const submit = async (e) => {
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      emailVisibility: false,
      password: e.target.password.value,
      passwordConfirm: e.target.password.value,
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
    }

    await pb.collection('users').create(userData)
  }

  return (
    <div className="flex h-[calc(100vh-74px)] justify-center items-center">
      <div className="w-450px bg-green-400 p-10 rounded-lg">
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
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full rounded-md text-white bg-zinc-800 px-6 py-1"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default RegisterForm
