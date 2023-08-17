import React from 'react'
import footer from '../Assets/footer-logo.png'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
      <section className='px-12 pt-12 pb-4'>
        <div>
          <div className='grid grid-cols-4'>
            <div>
              <img src={footer} alt="" />
            </div>
            <div>
              <ul className='font-semibold text-slate-500'>
                <li><Link to="terms-and-conditions">Terms and Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <ul className='font-semibold text-slate-500'>
                <li><Link>Contact</Link></li>
                <li><Link>support@urua.com</Link></li>
              </ul>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <AiFillFacebook className='text-2xl' />
              <AiFillLinkedin className='text-2xl' />
              <AiFillTwitterSquare className='text-2xl' />
              <AiFillInstagram className='text-2xl' />
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
