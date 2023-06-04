import { Link } from 'react-router-dom'
import CountdownTimer from '../../../components/CountdownTimer'
import useAuth from '../../../hooks/useAuth'
import HomeFooter from './HomeFooter'

const CoundownMessage = () => {
  const { loggedIn } = useAuth()
  const maddysBirthday = new Date('2023-07-10T00:00:00.000')
  return (
    <div className="w-full h-full sm:h-fit sm:max-w-xl flex flex-col items-center justify-center sm:p-2 bg-blue-400 sm:rounded-lg">
      <h1 className="text-5xl font-semibold p-4 text-center">
        Countdown to Maddy's Birthday!
      </h1>
      <div className="bg-pink-200 outline rounded-md p-2 text-out font-bold text-4xl sm:text-6xl m-4 w-auto">
        <CountdownTimer endDate={maddysBirthday} />
      </div>
      <div>
        Want to contribute?{' '}
        {loggedIn ? (
          <>
            <Link className="font-semibold hover:underline" to="/contribute">
              Click here
            </Link>
          </>
        ) : (
          <>
            <Link className="font-semibold hover:underline" to="/register">
              Register
            </Link>{' '}
            or{' '}
            <Link className="font-semibold hover:underline" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
      <HomeFooter />
    </div>
  )
}
export default CoundownMessage
