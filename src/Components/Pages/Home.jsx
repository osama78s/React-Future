import React from 'react'
import { LogoFile } from '../LogoHome'

export const Home = () => {
  return (
    <div className='container p-6'>
      <div className="home text-center mt-8">
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-extrabold sm:leading-tight  text-black dark:text-white'>Build The Future <br/> With Web</h1>
        <p className='md:my-10 my-5 leading-relaxed text-sm sm:text-base text-p-light dark:text-p-dark'>Discover How We Can Help You Connect With The Next Generation Of The Internet.</p>
        <div className="flex justify-center space-x-5 sm:space-x-16 items-center">
          <span className='cursor-pointer text-main bg-green hover:bg-main hover:text-white px-3 py-3 sm:px-8 rounded-md transition-all duration-300'>Learn More</span>
          <span className='cursor-pointer dark:text-main text-white dark:bg-white bg-main dark:hover:bg-transparent dark:hover:text-white px-3 py-3 sm:px-8 rounded-md transition-all duration-300'>Discover Now</span>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 md:mt-8 lg:mt-20 overflow-hidden'>
        <LogoFile/>
        <LogoFile/>
        <LogoFile/>
      </div>
    </div>
  )
}
