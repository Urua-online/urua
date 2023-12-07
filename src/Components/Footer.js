import React from 'react'
import footer from '../Assets/footer-logo.png'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import twitter from '../Assets/twitter.svg'

export const Footer = () => {
  return (
    <>
      <section className='px-6 md:px-12 pt-6 md:pt-12 pb-4 second-background max-w-7xl mx-auto'>
        <div>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <img src={footer} alt="" />
            </div>
            <div>
              <ul className='font-semibold text-slate-500'>
                <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <ul className='font-semibold text-slate-500'>
                <li><Link>Contact</Link></li>
                <li><Link>support@urua.com</Link></li>
              </ul>
            </div>
            <div className='flex justify-start lg:justify-center items-center gap-4 mt-6'>
              <a href="https://m.facebook.com/profile.php/?id=61552262876224" target='_blank' rel='noreferrer'> <AiFillFacebook className='text-2xl' /></a>
              <a href="https://www.linkedin.com/company/urua-technologies/" target='_blank' rel='noreferrer'><AiFillLinkedin className='text-2xl' /> </a>
              <a href="https://twitter.com/uruatechnology" target='_blank' rel='noreferrer'><img src={twitter} alt=''/></a>
              <a href="https://www.instagram.com/urua_technology" target='_blank' rel='noreferrer'><AiFillInstagram className='text-2xl' /></a>
            </div>
          </div>

          <div className='mt-16'>
            <p className='font-semibold'>Copyright © 2023 Urua. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  )
}
