import { pb } from '../api/pocketBase'

const LoginForm = () => {
  const submit = async (e) => {
    e.preventDefault()
    await pb
      .collection('users')
      .authWithPassword(e.target.email.value, e.target.password.value)
  }

  return (
    <div className="flex h-[calc(100vh-74px)] justify-center items-center">
      <div className="w-450px bg-green-400 p-10 rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-semibold">Sign In</h1>
        </div>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              className="w-full rounded"
              id="emailInput"
              name="email"
              placeholder="me@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="passwordInput">Password</label>
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
              Login
            </button>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]"
                type="checkbox"
                id="rememberCheck"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="rememberCheck"
              >
                Remember me
              </label>
            </div>

            <a href="#!" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-center lg:text-left">
            <p className="mb-0 mt-2 pt-1 text-sm">
              Don't have an account?{' '}
              <a href="#!" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
