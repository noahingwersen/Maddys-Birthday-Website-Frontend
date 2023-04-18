import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div className="text-center text-sm mt-2 mb-1">
      <p>&copy; 2023</p>
      <Link className="hover:underline" to="/about">
        About
      </Link>
    </div>
  )
}
export default HomeFooter
