import React from 'react'
import logo from '../Images/icon1.svg'

export const LogoFile = () => {
  return (
      <div className='rows text-center dark:text-white'>
          <div className='flex space-x-5 items-center justify-center mt-12 mb-3'>
              <img className='w-10' src={logo} alt="logo" />
              <h2 className='text-xl font-bold'>Cross-Chain Acces</h2>
          </div >
          <p className='dark:text-p-dark text-p-light text-sm'>Seamlessly interact with diverse blockchain networks.</p>
    </div>
  )
}
