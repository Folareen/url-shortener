import React, { useState } from 'react'
import logo from '../images/logo.svg';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

  return (
    <header className='w-full p-4 lg:px-20 relative flex justify-between max-w-[1440px] mx-auto'>
        <img src={logo} alt="logo"  className='w'/>
        <nav className={`flex flex-col absolute bg-DarkViolet text-white  rounded-lg text-center font-semibold  right-[5%] left-[5%] z-20 top-16 lg:hidden overflow-hidden  w-[90%] ${!hamburger ? "h-0 p-0" : "p-6 h-[50vh] " } mobile-nav justify-between `}>
            <div className='flex flex-col justify-around h-3/5'>
                <a href="" className='links-nav '>
                    Features
                </a>
                <a href="" className='links-nav '>
                    Pricing
                </a>
                <a href="" className='border-b-2 links-nav '>
                    Resources
                </a>
            </div>
            <div className='flex flex-col h-2/5  justify-evenly '>
                <a href="" className='p-2 hover:text-Gray'>
                    Login
                </a>
                <a href="" className='py-2 px-4 bg-Cyan rounded-3xl hover:bg-cyan-600'>
                    Sign Up
                </a>
            </div>
        </nav>
        {/* desktop nav */}
        <nav className=" flex-row justify-between text-center font-semibold  z-20 hidden lg:flex w-4/5 desktop-nav">
            <div className='flex flex-row w-3/5 justify-evenly'>
                <a href="" className='desktop-nav-links '>
                    Features
                </a>
                <a href="" className='desktop-nav-links '>
                    Pricing
                </a>
                <a href="" className=' desktop-nav-links '>
                    Resources
                </a>
            </div>
            <div className='flex flex-row w-2/5 justify-evenly'>
                <a href="" className='p-2 hover:text-Gray desktop-nav-links'>
                    Login
                </a>
                <a href="" className='py-2 px-4 bg-Cyan rounded-3xl hover:bg-cyan-600 desktop-nav-links text-white'>
                    Sign Up
                </a>
            </div>
        </nav>
        <button className={`inline-flex lg:hidden hamburger ${hamburger ? "active" : ""}`} onClick={()=>setHamburger(!hamburger)}>
            <div className='hamburger-top'></div>
            <div className='hamburger-middle'></div>
            <div className='hamburger-bottom'></div>
        </button>
    </header>
  )
}

export default Header