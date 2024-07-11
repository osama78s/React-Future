import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Enterprice = () => {
  return (
    <div className='enterprice mt-12 bg-gradient-to-r dark:from-gray-950 dark:to-slate-950  from-zinc-900 to-neutral-700 rounded-md p-5'>
        <h1 className='text-green text-2xl sm:text-4xl mb-5 font-bold'>Enterprice</h1>
        <p className='text-white tracking-wider leading-relaxed text-sm'>Perfect For Lorge Businesses Or Organization That Require Specialized Support</p>
        <span className=' mt-16 block text-3xl text-green'></span>
        <button className='bg-green rounded-md py-2 px-5 mx-auto block text-p-light my-3 mb-10 hover:text-white hover:bg-transparent transition-all duration-300'>Contact Sale </button>
        <ul className='text-white'>
        <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className='tracking-wider text-sm'>Custom Deployment</span></li>
        <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className='tracking-wider text-sm'>Comprehensive Usage Data</span></li>
        <li className='flex items-center mt-4'><FontAwesomeIcon className='text-p-light rounded-full bg-white p-1 me-3' icon={faCheck}/><span className='tracking-wider text-sm'>Trainig Specialized Models</span></li>
        </ul>
    </div>
  )
}
