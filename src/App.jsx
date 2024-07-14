import React, { useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Routes, Route, Navigate  } from 'react-router-dom';
import { Pricing } from './Components/Pages/Pricing';
import { Home } from './Components/Pages/Home';
import { Features } from './Components/Pages/Features';
import { Contact } from './Components/Pages/Contact';
import { ShowNav } from './Components/ShowNav';
import { HidenNav } from './Components/HidenNav';


function App() {
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme === 'true' : true; // تعيين قيمة افتراضية
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme.toString());

    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);

  return (
    <div className={`${theme ? `dark:bg-main min-h-screen` : `bg-white`}`}>
      
      <Navbar theme={theme} setTheme={setTheme}/>
      <HidenNav/>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Pricing' element={<Pricing/>}></Route>
        <Route path='/Futures' element={<Features />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
