import { Link } from 'react-router-dom'
import CountdownTimer from '../../../components/CountdownTimer'
import useAuth from '../../../hooks/useAuth'
import HomeFooter from './HomeFooter'

const CoundownMessage = () => {
  const { loggedIn } = useAuth()
  const maddysBirthday = new Date('Jul 10, 2023 00:00:00.000')
  return (
    <div className="max-w-xl h-fit flex flex-col items-center justify-center p-2 outline bg-slate-400 rounded-lg">
      <h1 className="text-5xl p-4 text-center">
        Countdown to Maddy's Birthday!
      </h1>
      <div className="text-pink-700 font-bold text-6xl my-4">
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
