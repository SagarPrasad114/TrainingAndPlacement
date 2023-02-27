import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import logo from '../images/college_image.jpeg'

function Nav() {
  const path="../images/college_image.jpeg";
  return (
    <nav className="navbar bg-black h-[100px] ">
     <ol className=' flex justify-center items-center relative p-[5px] text-white no-underline'>
     <Link to="/"
     className='navbar_logo flex pl-[1rem]  text-[1.5rem]  mr-[50px]'>
     <img src={logo} className="h-[80px] w-[80px]" alt="Logos"></img>     
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
