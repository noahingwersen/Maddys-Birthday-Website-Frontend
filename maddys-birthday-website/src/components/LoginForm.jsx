const LoginForm = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-450px bg-green-400 p-10 rounded-lg">
        <form>
          <div className="mb-6">
            <label for="emailInput" className="">
              Email address
            </label>
            <input
              type="text"
              className="w-full rounded"
              id="emailInput"
              placeholder="me@example.com"
            />
          </div>

          <div className="mb-6">
            <label for="passwordInput" className="">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded"
              id="passwordInput"
            />
          </div>

          <div className="mb-6">
            <button
              type="button"
              className="w-full rounded-sm bg-white px-6 py-1"
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
                for="rememberCheck"
              >
                Remember me
              </label>
            </div>

            <a href="#!">Forgot password?</a>
          </div>
          <div className="text-center lg:text-left">
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account? <a href="#!">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
