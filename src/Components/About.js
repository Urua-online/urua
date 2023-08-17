import React from 'react'
import illustration1 from '../Assets/illustration-1.png'
import illustration2 from '../Assets/illustration-2.png'
import illustration3 from '../Assets/illustration3.png'
import illustration4 from '../Assets/illustration4.png'
import illustration5 from '../Assets/illustration5.png'
import spiral from '../Assets/spiral-bg.png'
import bazuca from '../Assets/Brazuca Browsing.png'
import rectangle from '../Assets/Rectangle.png'


export const About = () => {
  return (
    <>
      <section className='' id='about'>

        {/* MISSION DIV  */}
        <div className='grid grid-cols-2 items-center justify-center'>
          <div className='flex justify-end bg-gradient-to-r from-red-300 via-white to-white' >
            <img src={illustration1} alt="" className='right-0 py-16' />
          </div>

          <div className='flex flex-col justify-start px-8'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Our Mission</h3>
            <p className='text-lg'>Urua is dedicated to building a future where digital divide between vendors and consumers is bridged by a digital marketing platform that is accessible to everyone no matter where you are around the world.</p>
          </div>
        </div>

        {/* VISSION DIV  */}
        <div className='grid grid-cols-2 items-center'>
          <div className='flex flex-col text-end px-8'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Our Vision</h3>
            <p className='text-lg'>To build the world’s most exclusive digital market platform where people (vendors and consumers) can buy goods and services at the comfort of their homes.</p>
          </div>

          <div className='bg-gradient-to-r from-white via-white to-red-300' >
            <img src={illustration2} alt="" className='py-16' />
          </div>
        </div>

        {/* SHOPPING EXPERIENCE DIV  */}
        <div style={{ backgroundImage: `url(${spiral})` }} className='grid grid-cols-2 items-center'>
          <div className='flex justify-end relative'>
            <img src={bazuca} alt="" className='' />
            <img src={rectangle} alt="" className='absolute bottom-0 left-0 w-80' />
          </div>

          <div className='flex flex-col px-8 py-16 text-center gap-4'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Bringing to you the best shopping experience</h3>
            <p className='text-lg'>Urua's intuitive interface allows you to effortlessly navigate through categories, filter by preferences, and discover new products that match your interests. Enhance your shopping experience with Urua.</p>
            <div>
              <button className='bg-amber-400 text-white px-8 py-2 rounded-br-md'>Start Shopping!</button>
            </div>
          </div>
        </div>

        {/* SELL BUY DELIVER DIV  */}
        <div className='px-12 py-8 urua'>
          <div className='text-center px-40'>
            <h3 className='text-4xl font-bold text-white'>SELL, BUY, DELIVER</h3>
            <p className='text-lg text-white py-4'>Dui risus lacinia gravida morbi malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</p>
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white rounded-lg px-8 py-8'>
              <img src={illustration3} alt="" />
              <h5 className='text-lg font-bold urua-text my-4'>1. BUY</h5>
              <p>Urua, the ultimate platform that connects you with a world of opportunities and eager customers. Take your business to new heights and tap into a larger market? </p>
            </div>
            <div className='bg-white rounded-lg px-8 py-8'>
              <img src={illustration4} alt="" />
              <h5 className='text-lg font-bold urua-text my-4'>2. SELL</h5>
              <p>Shop with confidence, knowing that your transactions are secure and your privacy is respected.</p>
            </div>
            <div className='bg-white rounded-lg px-8 py-8'>
              <img src={illustration5} alt="" />
              <h5 className='text-lg font-bold urua-text my-4'>3. DELIVER</h5>
              <p>Join our app and get connected to a bustling marketplace brimming with customers eager to have their packages delivered reliably and efficiently.</p>
            </div>
          </div>

          <div className='text-center my-8'>
            <button className='bg-amber-400 text-white px-8 py-2 rounded-br-md'>Get Urua</button>
          </div>
        </div>
      </section>
    </>

  )
}
