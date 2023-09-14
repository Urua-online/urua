import React, { useRef } from 'react'
import logo1 from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <section className='px-6 md:px-12 py-4 sticky top-0 second-background z-50 '>
      <header className="flex items-center justify-between">
        <div className='flex items-center justify-center gap-2'>
          <img src={logo1} alt="" />
          <Link to='/'><img src={logo2} alt="" className='w-3/4 pt-1'/></Link>
        </div>

        <nav className='flex flex-col md:flex-row items-center justify-center gap-8' ref={navRef}>
          <div className='flex items-center justify-center gap-2 absolute top-8 left-6 md:hidden'>
            <img src={logo1} alt="" />
            <Link to='/'><img src={logo2} alt="" className='w-3/4 pt-1'/></Link>
          </div>
          
          <ul className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
            <li className='hover:text-red-500'><HashLink to='/'>Home</HashLink></li>
            <li className='hover:text-red-500'><HashLink to='#about'>About</HashLink></li>
            <li className='hover:text-red-500'><HashLink to='#FAQ'>FAQs</HashLink></li>
          </ul>
          <button className='urua text-white px-6 py-1 rounded-br-md'>Shop Now</button>

          <div>
            <button onClick={showNavbar} className='nav-btn nav-close-btn lg:hidden '><FaTimes className='text-2xl absolute top-10 right-6 urua-text'/> </button>
          </div>
        </nav>

        <div className='lg:hidden '>
          <button onClick={showNavbar} className='nav-btn'><FaBars className='text-2xl urua-text' /></button>
        </div>
      </header>
    </section>
  )
}