import React from 'react'
import { Lora } from 'next/font/google'
import ScratchCard from './ScratchCard'
import Calendar from './Calendar'


const inter = Lora({
  subsets: ['latin'], // You can specify other subsets if needed
  weight: ['400', '700'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
})

export default function Dashboard() {
  const statuses = {
    num_days: 14, 
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
  }

  return (
    <div className={'flex flex-col flex-1 gap-8 sm:gap-10 md:gap-12 ' + inter.className}>
      <div className='grid grid-cols-1 sm:grid-cols-3 bg-[#5E854C]/30 rounded-md'>
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className='p-4 flex flex-col gap-1 sm:gap-2'>
              <p className='font-bold lowercase blackolive text-xs sm:text-lg'>{status.replaceAll('_', ' ')}</p>
              <p className='text-base sm:text-md'>{statuses[status]}</p>
            </div>
          )
        })}
      </div>
      <div className=''>
        <p className='italic border-l-2 p-3 border-[#5E854C]'>need a little inspiration?</p>
        {/* <ScratchCard/> */}
      </div>
      <Calendar/>      
    </div>
  )
}
