import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Basic = () => {
  return (
    <div className='basic mt-12 bg-gradient-to-r dark:from-gray-950 dark:to-slate-950  from-zinc-900 to-neutral-700 rounded-md p-5'>
        <h1 className='text-green text-2xl sm:text-4xl mb-5 font-bold'>Basic</h1>
        <p className='text-white text-sm'>For Personal Use And Explaination Of Al Technology</p>
        <span className='number mt-10 block text-3xl text-green'>0</span>
        <button className='bg-green rounded-md py-2 px-5 mx-auto block text-p-light my-3 mb-8 hover:text-white hover:bg-transparent transition-all duration-300'>Get Started</button>
        <ul className='text-white'>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>100 Requests Per Day</span></li>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>Free Trial Features Access</span></li>
          <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className=''>Limited Api Access</span></li>
        </ul>
    </div>
  )
}
