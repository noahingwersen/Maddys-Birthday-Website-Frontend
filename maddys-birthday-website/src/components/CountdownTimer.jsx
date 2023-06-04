import { useState, useEffect } from 'react'
import { zeroPad } from '../utils/Helpers'

const CountdownTimer = ({ endDate }) => {
  const filler = { days: '00', hours: '00', minutes: '00', seconds: '00' }
  const [duration, setDuration] = useState(filler)

  useEffect(() => {
    const updateCountdown = () => {
      const today = new Date()

      let difference = endDate - today
      if (difference <= 0) {
        setDuration(filler)

        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      difference -= days * (1000 * 60 * 60 * 24)
      const hours = Math.floor(difference / (1000 * 60 * 60))
      difference -= hours * (1000 * 60 * 60)
      const minutes = Math.floor(difference / (1000 * 60))
      difference -= minutes * (1000 * 60)
      const seconds = Math.floor(difference / 1000)

      setDuration({
        days: zeroPad(days, 2),
        hours: zeroPad(hours, 2),
        minutes: zeroPad(minutes, 2),
        seconds: zeroPad(seconds, 2),
      })
    }
    const updateInterval = setInterval(updateCountdown, 1000)

    return () => {
      clearInterval(updateInterval)
    }
  }, [])

  return (
    <div className="m-2">
      {duration && (
        <div className="grid grid-cols-7 text-center">
          <div>{duration.days}</div>
          <div>:</div>
          <div>{duration.hours}</div>
          <div>:</div>
          <div>{duration.minutes}</div>
          <div>:</div>
          <div>{duration.seconds}</div>
          <div className="text-lg">Days</div>
          <div></div>
          <div className="text-lg">Hours</div>
          <div></div>
          <div className="text-lg">Minutes</div>
          <div></div>
          <div className="text-lg">Seconds</div>
        </div>
      )}
    </div>
  )
}
export default CountdownTimer
