import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Premium = () => {
  return (
    <div className='premium mt-12 xl:mt-8 bg-gradient-to-r dark:from-gray-950 dark:to-slate-950  from-zinc-900 to-neutral-700 rounded-md p-5'>
        <h1 className='text-green text-2xl sm:text-4xl mb-5 font-bold'>Premiun</h1>
        <p className='text-white leading-relaxed tracking-wider text-sm'>Perfect For Professionals And Small Bussinesses In Need Of Significant Ai Integration</p>
        <span className='number mt-10 block text-3xl text-green'>9.99</span>
        <button className='bg-green rounded-md py-2 px-5 mx-auto block text-p-light my-3 mb-8 hover:text-white hover:bg-transparent transition-all duration-300'>Get Started</button>
        <ul className='text-white'>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>Unlimited Ai Generation</span></li>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>Full New Features Aceccess</span></li>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>Priority Support</span></li>
        </ul>
    </div>
  )
}
