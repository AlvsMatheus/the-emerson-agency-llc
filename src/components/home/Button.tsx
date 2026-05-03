import { Link } from "react-router-dom"

const Button = () => {
  return (
    <Link to="/intake"  className='text-orange-800 rounded-full bg-linear-to-b from-orange-200/30 via-orange-200 to-orange-200/30 border border-amber-500/40 px-6 py-4'>
        Get Started
    </Link>
  )
}

export default Button
