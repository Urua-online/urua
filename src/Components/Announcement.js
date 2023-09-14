import React from 'react'
import Marquee from "react-fast-marquee"
import radio from '../Assets/radio-empty-toned.webp'
import loop from '../Assets/reload-01.webp'


function Announcement() {
  return (
    <>
      <section className='announcement p-2 second-background '>
        <Marquee className=''>
          <p className='flex jusitify-center items-center gap-2 text-2xl text-slate-800 font-bold tracking-widest'> OUR SERVICES: LOGISTICS <span><img src={radio} alt="" /></span> CUSTOMER SERVICE <span><img src={radio} alt="" /></span>  LAST-MILE DELIVERY <span><img src={loop} alt="" /></span>  <span></span></p>
        </Marquee>
      </section>

    </>
  )
}

export default Announcement