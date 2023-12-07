import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineApple } from 'react-icons/ai'
import Questions from './Questions'

const questionaire = [
  {
    id: 1,
    question: "What is Urua?",
    answer: "URUA service, website and/or software application is a digital marketplace where users/visitors are able to buy and sell goods and services from the comfort of your house and at the touch of a button. URUA brings the market to your personal space and takes your market to a wider audience and creates a point of convergence for business owners and customers in the digital market space."
  },

  {
    id: 2,
    question: "Is there a mobile app?",
    answer: "Yes, there URUA service has a mobile application software available for download on Goggle play store and ios store for iPhone users. The urua mobile app has an easy-to-navigate User interface and of course still performs the same function as the website."
  },
]
export const FAQ = () => {
  return (
    <>
      <section className='px-6 md:px-12 py-8 max-w-7xl mx-auto bg-white' id='FAQ'>
        <div className='text-center lg:px-40'>
          <h3 className='text-3xl urua-text'>Frequently Asked Questions</h3>
          <p className='py-8'>Below are most asked questions</p>
        </div>

        <div>

          <div className='max-w-xl mx-auto px-5'>
            <div>
              <div className='my-8'>
                {questionaire.map((quest) => {
                  const { id } = quest

                  return (
                    <Questions key={id} {...quest} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:grid grid-cols-2 second-background max-w-7xl mx-auto'>
        <div className='urua text-white rounded-br-3xl p-12 flex flex-col justify-center items-center h-60 md:h-80'>
          <div>
            <p className='text-5xl font-semibold'>Join Us Today</p>
          </div>
        </div>

        <div className='pt-4 px-6 lg:p-12 text-center border-b border-xl border-red-500'>
          <p className='text-lg font-semibold'>Download URUA now and step into a world where convenience meets variety. Embrace the freedom to shop for groceries, electronics, fashion, and so much more, all from the comfort of your own space.</p>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-4 my-8'>
            <div className='flex items-center justify-center gap-5 bg-slate-900 rounded text-slate-200 px-5 py-1'>
              <FcGoogle className='text-2xl' />
              <div>
                <p className='text-sm'>GET IT ON</p>
                <p className='text-xs'>Google Play</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-5 bg-slate-900 rounded text-slate-200 px-5 py-1'>
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