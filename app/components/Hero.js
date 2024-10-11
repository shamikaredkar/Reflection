import React from 'react'
import {Lora} from 'next/font/google'

const inter = Lora({
  subsets: ['latin'], // You can specify other subsets if needed
  weight: ['400'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
})

export default function Hero() {

  return (
    <div className={' py-5 sm:py-7 md:py-10 blackolive ' + inter.className}>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-left'><span className='textGradient'>re·flec·tion</span></h1>
      <h3 className='italic text-left'>noun</h3>
      <h3 className='text-left'>the act of looking within-a moment to <span className='italic green'>pause</span>, <span className='italic green'>observe</span>, and <span className='italic green'>connect</span> with your emotions.</h3>

{/* Cards Container with Enhanced Glassmorphism */}
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='bg-[#5E854C]/30 backdrop-blur-sm shadow-xl border border-[#23482B]/30 rounded-sm p-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-5000 ease-in-out'>
          <h4 className='font-bold text-lg text-center blackolive italic'>release your thoughts</h4>
          <p className='mt-2 text-[#FBFFFC] text-center'>
            let go of mental clutter and find peace within
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#5E854C]/30 backdrop-blur-sm shadow-xl border border-[#23482B]/30 rounded-sm p-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-5000 ease-in-out'>
          <h4 className='font-bold text-lg text-center blackolive italic'>record your feelings</h4>
          <p className='mt-2 text-[#FBFFFC] text-center'>
            put your feelings into words and capture what matters to you.
          </p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#5E854C]/30 backdrop-blur-sm shadow-xl border border-[#23482B]/30 rounded-sm p-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-5000 ease-in-out'>
          <h4 className='font-bold text-lg text-center blackolive italic'>reflect on your growth</h4>
          <p className='mt-2 text-[#FBFFFC] text-center'>
            read your past entries and see how far you've come.
          </p>
        </div>
      </div>
    </div>
  )
}
