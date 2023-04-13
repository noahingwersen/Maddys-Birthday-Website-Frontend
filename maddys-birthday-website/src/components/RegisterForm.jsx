const RegisterForm = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-450px bg-green-400 p-10 rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-semibold">Register</h1>
        </div>
        <form>
          <div className="mb-4">
            <label for="firstNameInput" className="">
              First Name
            </label>
            <input type="text" className="w-full rounded" id="lastNameInput" />
          </div>
          <div className="mb-4">
            <label for="lastNameInput" className="">
              Last Name
            </label>
            <input type="text" className="w-full rounded" id="lastNameInput" />
          </div>
          <div className="mb-4">
            <label for="emailInput" className="">
              Email address
            </label>
            <input
              type="email"
              className="w-full rounded"
              id="emailInput"
              placeholder="me@example.com"
            />
          </div>

          <div className="mb-4">
            <label for="passwordInput" className="">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded"
              id="passwordInput"
            />
          </div>

          <div className="mb-4">
            <button
              type="button"
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
