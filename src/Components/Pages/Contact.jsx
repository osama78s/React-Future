import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PageForm } from '../Form';
export const Contact = () => {
  return (
    <div className='alls container flex flex-col items-center p-6'>
        <div className='contact mt-4 lg:mt-8'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-extrabold sm:leading-tight text-black dark:text-white'>Contact Us</h1>
        </div>
        <div className='flex flex-col space-y-5 justify-between md:flex-row md:space-x-16 md:space-y-0 xl:space-x-40 mt-10 md:mt-14 lg:mt-16'>
            <div className="box text-center">
              <FontAwesomeIcon icon={faLocation} className='dark:bg-p-light bg-p-dark text-white text-2xl xl:text-4xl p-5 rounded-full mb-5'/>
              <h1 className='dark:text-white text-2xl xl:text-3xl font-bold mb-1'>Address</h1>
              <p className='dark:text-p-dark text-p-light tracking-wide text-sm sm:text-lg'>Gamal Saif Street, Qotour, Tanta, Egypt</p>
            </div>
            <div className="box text-center">
              <FontAwesomeIcon icon={faPhone} className='dark:bg-p-light bg-p-dark text-white text-2xl xl:text-4xl p-5 rounded-full mb-5'/>
              <h1 className='dark:text-white text-2xl xl:text-3xl font-bold mb-1'>Phone</h1>
              <p className='dark:text-p-dark text-p-light tracking-wide text-sm sm:text-lg'>01090215249</p>
            </div>
            <div className="box text-center">
              <FontAwesomeIcon icon={faEnvelope} className='dark:bg-p-light bg-p-dark text-white text-2xl xl:text-4xl p-5 rounded-full mb-5'/>
              <h1 className='dark:text-white text-2xl xl:text-3xl font-bold mb-1'>Email</h1>
              <p className='dark:text-p-dark text-p-light tracking-wide text-sm sm:text-lg'>osamasaif242@gmail.com</p>
            </div>
        </div>
        <PageForm/>
    </div>
  )
}
