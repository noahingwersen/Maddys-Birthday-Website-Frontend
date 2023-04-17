import { useState, useEffect } from 'react'

const CountdownTimer = ({ endDate }) => {
  const [duration, setDuration] = useState()

  const updateCountdown = () => {
    const today = new Date()

    let difference = endDate - today
    if (difference <= 0) {
      setDuration({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })

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
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    })
  }

  useEffect(() => {
    const updateInterval = setInterval(updateCountdown, 1000)

    return () => {
      clearInterval(updateInterval)
    }
  }, [])

  return (
    <div>
      {duration && (
        <p className="text-white">
          Days: {duration.days}, Hours: {duration.hours}, Minutes:{' '}
          {duration.minutes}, Seconds: {duration.seconds}
        </p>
      )}
    </div>
  )
}
export default CountdownTimer
