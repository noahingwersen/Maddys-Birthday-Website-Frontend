import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div className="text-center text-sm mt-2 mb-1">
      <Link className="hover:underline" to="/about">
        How does this work?
      </Link>
      <p>&copy; 2023</p>
    </div>
  )
}
export default HomeFooter
