import React from 'react'
import { Lora } from 'next/font/google'
import './Button.css';

const inter = Lora({
  subsets: ['latin'], // You can specify other subsets if needed
  weight: ['400', '700'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
})

export default function Button(props) {
  const { text, dark, full } = props

  return (
    <button
      className={
        'rounded-md overflow-hidden duration-200  relative border-2 border-[#23482B]/30 animation-cloud-btn ' + 
        (dark ? ' text-[#23482B]' : ' text-[#23482B]') + (full ? 'grid m-6 place-items-center w-5/12' : '')
      }
    >
      {/* Button content */}
      <p className={'px-6 sm:px-10 whitespace-nowrap font-bold italic py-3 sm:py-3 z-10 relative ' + inter.className}>
        {text}
      </p>
      
      {/* Cloud animation */}
      <span className="animation-cloud-btn-inner">
        <span className="animation-cloud-parts">
          <span className="animation-cloud-part"></span>
          <span className="animation-cloud-part"></span>
          <span className="animation-cloud-part"></span>
          <span className="animation-cloud-part"></span>
        </span>
      </span>
    </button>
  )
}
