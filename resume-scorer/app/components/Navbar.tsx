import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar bg-zinc-200 flex justify-between w-screen top-2'>
         <Link to= "/" className='flex justify-between'>
            <p className='text-3xl font-bold text-gradient'>Hire-Scan.</p>
         </Link>

         <Link to="/upload" className='primary-button w-fit '>
            Upload Your Resume
         </Link>
      </nav>
    </div>
  )
}

export default Navbar
