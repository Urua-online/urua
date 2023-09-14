import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineApple } from 'react-icons/ai'
import Questions from './Questions'

const questionaire = [
  {
    id: 1,
    question: "What is Urua?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
  },

  {
    id: 2,
    question: "Is there a mobile app?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
  },

  {
    id: 3,
    question: "How can I request a new browser?",
    answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
  },

  {
    id: 4,
    question: "What is Urua?",
    answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
  },
]
export const FAQ = () => {
  return (
    <>
      <section className='px-6 md:px-12 py-8' id='FAQ'>
        <div className='text-center lg:px-40'>
          <h3 className='text-3xl urua-text'>Frequently Asked Questions</h3>
          <p className='py-8'>Dui risus lacinia gravida morbi malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</p>
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

      <section className='md:grid grid-cols-2 second-background'>
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