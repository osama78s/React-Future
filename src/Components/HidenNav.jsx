import React from 'react'
import { UlNav } from './UlNav'

export const HidenNav = () => {
  return (
    <div className='sm:hidden absolute left-1/2 transform -translate-x-1/2 '>
        <UlNav/>
    </div>
  )
}
