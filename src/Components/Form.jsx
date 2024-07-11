import React from 'react'

export const PageForm = () => {
  return (
    <div className='mt-10 text-center overflow-hidden'>
        <form className='grid grid-cols-2 gap-5 mt-2'>
            <input className='input1 dark:bg-p-light bg-p-dark sm:w-72 md:w-80 lg:w-96 p-5 rounded-md text-white' type="text" placeholder='Your Name' />
            <input className='input2 dark:bg-p-light bg-p-dark sm:w-72 md:w-80  lg:w-96 p-5 rounded-md text-white' type="email" placeholder='Your email' />
            <input className=' input3 height dark:bg-p-light sm:w-72 md:w-80 bg-p-dark lg:w-96 p-5 rounded-md text-white' type="text" placeholder='Your Subject' />
            <textarea className='input4 height dark:bg-p-light sm:w-72 md:w-80 bg-p-dark lg:w-96 p-5 rounded-md text-white' type="message" placeholder='Your Subject' />
        </form>
        <button className='btn mt-4 bg-p-dark dark:bg-p-light py-4 px-4 lg:px-8 rounded-md text-zinc-300'>Send Message</button>
    </div>
  )
}
