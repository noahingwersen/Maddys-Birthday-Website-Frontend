import CountdownTimer from '../../components/CountdownTimer'

const MainPage = () => {
  const maddysBirthday = new Date('July 10, 2023 00:00:00.000')

  return (
    <div className="h-full">
      <h1 className="text-white">Main Page</h1>
      <CountdownTimer endDate={maddysBirthday} />
    </div>
  )
}
export default MainPage
