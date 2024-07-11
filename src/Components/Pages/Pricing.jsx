import React from 'react'
import { Basic } from '../Basic'
import { Premium } from '../Premium'
import { Enterprice } from '../Enterprice'

export const Pricing = () => {
  return (
    <div className=' container p-6'>
      <div className='pricing text-center mt-4'>
        <h1 className='dark:text-white text-black text-5xl leading-tight sm:leading-none sm:text-6xl md:text-7xl font-extrabold'>Choose Your Plan </h1>
        <h4 className='mt-5 text-p-light dark:text-p-dark text-md sm:text-2xl' >Unlock Endless Possibilities</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-10 mt-4 overflow-hidden">
        <Basic/>
        <Premium/>
        <Enterprice/>
      </div>
    </div>
  )
}
