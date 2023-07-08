import { useEffect, useState } from 'react'
import CoundownMessage from './components/CoundownMessage'
import Confetti from '../../components/Confetti'

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const maddysBirthday = new Date('2023-07-10T00:00:00.000')
    const now = new Date()

    if (maddysBirthday - now <=0) {
      setShowConfetti(true)
    }
  
  }, [])

  return (
    <div className="flex items-center h-full justify-center">
      {showConfetti && <Confetti />}
      <CoundownMessage />
    </div>
  )
}
export default HomePage
