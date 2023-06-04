import { Link } from 'react-router-dom'

const AboutFooter = () => {
  return (
    <div className="text-center text-sm mt-2 mb-1">
      <Link className="hover:underline" to="/">
        Home
      </Link>
      <p>&copy; 2023</p>
    </div>
  )
}
export default AboutFooter
