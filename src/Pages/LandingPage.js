import React, { useEffect } from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { FAQ } from '../Components/FAQ'
import { Footer } from '../Components/Footer'
import { useSearchParams } from 'react-router-dom'

export const LandingPage = () => {
  const [param] = useSearchParams()
  console.log(param?.get('referral'))

  //redirect to https://play.google.com/store/apps/details?id=com.uruaafrica if referral is passed as a query parameter
  useEffect(() => {
    if (param?.get('referral')) {
      window.location.href = `https://play.google.com/store/apps/details?id=com.uruaafrica&referrer=utm_source%3Drefer%26utm_content%3D${param.get('referral')}`
    }
  }, [param])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <Footer />
    </>
  )
}
