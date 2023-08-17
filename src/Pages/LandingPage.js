import React from 'react'
import {Navbar} from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { FAQ } from '../Components/FAQ'
import { Footer } from '../Components/Footer'


export const LandingPage = () => {
  return (
    <>
          <Navbar/>   
          <Hero/>
          <About/>
          <FAQ/>
          <Footer/>
    </>
  )
}
 