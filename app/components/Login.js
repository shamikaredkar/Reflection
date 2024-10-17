import React from 'react'
import { Lora } from 'next/font/google'
import Button from './Button'

const inter = Lora({
  subsets: ['latin'], // You can specify other subsets if needed
  weight: ['400', '700'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
})

export default function Login() {
  return (
    <div className={'flex flex-col flex-1 justify-center items-center gap-4 blackolive '+ inter.className}>
      <h3 className={'text-3xl sm:text-4xl md:text-5xl'}>welcome back</h3>
      <p className='italic mb-4'>how are you feeling today?</p>
      <input className=' max-w-[370px] w-full mx-auto px-3 py-2 sm:py-3 border border-solid border-[#23482B]/30 rounded-md outline-none hover:border-[#23482B] focus:border-[#23482B]/60' placeholder='Email'/>
      <input className=' max-w-[370px] w-full mx-auto px-3 py-2 sm:py-3 border border-solid border-[#23482B]/30 rounded-md outline-none hover:border-[#23482B] focus:border-[#23482B]/60' placeholder='Password'/>
      <Button text="log in" full/>
      <p><span className='text-[#23482B]/30'>don&#39;t have an account? </span><span className='blackolive underline '>sign up</span></p>
    </div>
  )
}
