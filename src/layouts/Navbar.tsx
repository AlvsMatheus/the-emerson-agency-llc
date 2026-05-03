import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex fixed z-10 top-5 left-5 h-25 w-full '>
        <Link to="/"><img src="/emerson_logo.png" alt="Emerson logo" className='h-full' /></Link>
    </nav>
  )
}

export default Navbar
