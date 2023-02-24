import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <nav className="navbar bg-black h-[60px] ">
     <ol className=' flex justify-center items-center relative p-[5px] text-white no-underline'>
     <Link to="/"
     className='navbar_logo flex pl-[1rem]  text-[1.5rem]  mr-[50px]'>
     Logo     
     </Link>
     <li className=' mx-[25px]'>
      
      Home</li>
     <li className=' mx-[25px]'>Companies</li>
     <li className='mx-[25px]'>Internships</li>
     <li className=' mx-[25px]'>Placement Records</li>
     <li className=' mx-[25px]'>
      <Link to="/rules">Rules</Link></li>
     {/* only for teachers */}
     <li className='text-white no-underline mx-[25px]'>Students</li>
     </ol>
    </nav>
  )
}

export default Nav
