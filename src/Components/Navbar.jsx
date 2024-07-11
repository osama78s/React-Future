import React, { useState, useEffect } from 'react';
import logo  from '../Images/logo.svg'
import logo2  from '../Images/logo-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { UlNav } from './UlNav';
import { ShowNav } from './ShowNav';

export const Navbar = ({ theme, setTheme }) => {

    let handelTheme = () => {
        setTheme(prevTheme => !prevTheme);
    }
    
  return (
   <nav>
        <div className="container p-6 flex items-center justify-between">
            <div className="logo">
                <img src={theme ? logo : logo2} alt="" />
            </div>
            <ShowNav/>
            <div className="icons cursor-pointer text-xl relative ">
                <FontAwesomeIcon className= 'text-black dark:text-green absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-700' icon={theme ? faSun : faMoon}  onClick={handelTheme}/>
            </div>
        </div>
   </nav>   
  )
}
