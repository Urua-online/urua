import React from 'react'
import elipse from '../Assets/elipse.png'
import whitedots from '../Assets/white-dots.png'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineApple } from 'react-icons/ai'


export const FAQ = () => {
  return (
    <>
      <section className='px-6 md:px-12 py-8' id='FAQ'>
        <div className='text-center lg:px-40'>
          <h3 className='text-3xl urua-text'>Frequently Asked Questions</h3>
          <p className='py-8'>Dui risus lacinia gravida morbi malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</p>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <p className='font-semibold text-lg'>Dui risus lacinia gravida morb?</p>
            <small>malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</small>
          </div>
          <div>
            <p className='font-semibold text-lg'>Dui risus lacinia gravida morb?</p>
            <small>malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</small>
          </div>
          <div>
            <p className='font-semibold text-lg'>Dui risus lacinia gravida morb?</p>
            <small>malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</small>
          </div>
          <div>
            <p className='font-semibold text-lg'>Dui risus lacinia gravida morb?</p>
            <small>malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</small>
          </div>
        </div>
      </section>

      <section className='py-8 md:grid grid-cols-2'>
        <div className='urua text-white rounded-br-3xl p-12 flex flex-col justify-center items-center h-60 md:h-96 relative'>
          <div>
            <p className='text-5xl font-semibold'>Join Us Today</p>
          </div>
          <img src={elipse} alt="" className='absolute bottom-12 left-20' />
          <img src={whitedots} alt="" className='absolute top-10 right-20' />
        </div>

        <div className='pt-4 px-6 lg:p-12 text-center border-b border-xl border-red-500'>
          <p className='text-lg font-semibold urua-text'>Download URUA now and step into a world where convenience meets variety. Embrace the freedom to shop for groceries, electronics, fashion, and so much more, all from the comfort of your own space.</p>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-4 my-8'>
            <div className='flex items-center justify-center gap-5 bg-slate-900 rounded text-slate-200 px-5 py-1 w-full'>
              <FcGoogle className='text-2xl' />
              <div>
                <p className='text-sm'>GET IT ON</p>
                <p className='text-xs'>Google Play</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-5 bg-slate-900 rounded text-slate-200 px-5 py-1 w-full'>
              <AiOutlineApple className='text-3xl' />
              <div>
                <p className='text-sm'>GET IT ON</p>
                <p className='text-xs'>App Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
