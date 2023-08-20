import React from 'react'
import elipse from '../Assets/elipse.png'
import union from '../Assets/Union.png'
import spiral from '../Assets/spiral.png'
import dots from '../Assets/dots.png'


export const Hero = () => {
  return (
    <section className='md:flex md:grid grid-cols-2 pt-4'>
      <div className='urua text-white rounded-br-3xl flex flex-col justify-center pt-16'>
          <p className='px-12 text-5xl'>Shop with us</p>

          <div className='rounded-br-3xl bg-white text-black p-4 lg:px-12 h-36 flex flex-col justify-center mt-4 mb-8'>
            <p className='lg:text-lg font-semibold'>Our all-in-one shopping destination - Urua, designed to be your virtual supermarket, offering an unparalleled variety of items that cater to your every need and desire.</p>
          </div>

          <div className='px-4 lg:px-12 flex flex-col md:flex-row gap-4 lg:gap-8'>
            <button className='bg-amber-400 text-white px-8 py-2 rounded-br-md'>Start Shopping!</button>
            <button className='text-white px-8 py-2 border outline-white rounded-br-md'>Join Waitlist</button>
          </div>

          <div className='m-12'>
          <img src={elipse} alt="" />
          </div>
      </div>

      <div className='flex relative justify-center p-4'>
        <img src={union} alt=""/>
        <img src={dots} alt="" className='absolute top-10 left-10'/>
        <img src={dots} alt="" className='absolute top-10 right-10'/>
        <img src={dots} alt="" className='absolute bottom-10 left-10'/>
        <img src={spiral} alt="" className='absolute top-32 lg:inset-28'/>
      </div>
    </section>
  )
}
