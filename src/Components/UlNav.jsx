import React from 'react'
import { NavLink } from "react-router-dom";

export const UlNav = () => {
  return (
    <ul className='md:me-20 dark:text-white text-black flex me-6 space-x-6 md:space-x-12'>
    <li>
        <NavLink to="/home"
        className={({ isPending, isActive }) => 
            isPending ? 'pending' : isActive ? 'active' : ''
        }>
            Home
        </NavLink>
    </li>
    <li>
        <NavLink to="/Pricing"
        className={({ isPending, isActive }) => 
            isPending ? 'pending' : isActive ? 'active' : ''
        }>
            Pricing
        </NavLink>
    </li>
    <li>
        <NavLink to="/Futures"
        className={({ isPending, isActive }) => 
            isPending ? 'pending' : isActive ? 'active' : ''
        }>
            Features
        </NavLink>
    </li>
    <li>
        <NavLink to="/Contact"
        className={({ isPending, isActive }) => 
            isPending ? 'pending' : isActive ? 'active' : ''
        }>
            Contact
        </NavLink>
    </li>
</ul>
  )
}
