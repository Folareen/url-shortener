import React, { useState } from 'react'
import logo from '../images/logo.svg';
import { motion } from 'framer-motion';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const variants = {
        hidden: {opacity: 0, marginTop: '-200px'},
        visible: {opacity: 1, marginTop: 0,  transition: {duration: 1}}
    }

  return (
    <motion.div initial='hidden' animate='visible' variants={variants}>

        <header className='w-full p-4 relative flex justify-between mx-auto lg:px-40'>
            <img src={logo} alt="logo"  className='w'/>
            <nav className={`flex flex-col absolute bg-DarkViolet text-white  rounded-lg text-center font-semibold  right-[5%] left-[5%] z-20 top-16 lg:hidden overflow-hidden  w-[90%] ${!hamburger ? "h-0 p-0" : "p-6 h-[55vh] " } mobile-nav justify-between `}>
                <div className='flex flex-col justify-around h-3/5'>
                    <a href="#" className='links-nav '>
                        Features
                    </a>
                    <a href="#" className='links-nav '>
                        Pricing
                    </a>
                    <a href="#" className='border-b-2 links-nav '>
                        Resources
                    </a>
                </div>
                <div className='flex flex-col h-2/5  justify-evenly '>
                    <a href="#" className='p-2 hover:text-Gray'>
                        Login
                    </a>
                    <a href="#" className='py-2 px-4 bg-Cyan rounded-3xl hover:bg-cyan-600'>
                        Sign Up
                    </a>
                </div>
            </nav>
            {/* desktop nav */}
            <nav className=" flex-row justify-between text-center font-semibold z-20 hidden lg:flex w-4/5 desktop-nav ">
                <div className='flex flex-row w-3/5 justify-evenly'>
                    <a href="#" className='desktop-nav-links '>
                        Features
                    </a>
                    <a href="#" className='desktop-nav-links '>
                        Pricing
                    </a>
                    <a href="#" className=' desktop-nav-links '>
                        Resources
                    </a>
                </div>
                <div className='flex flex-row w-2/5 justify-evenly'>
                    <a href="#" className='p-2 hover:text-Gray desktop-nav-links text-lg'>
                        Login
                    </a>
                    <a href="#" className='py-2 px-4 bg-Cyan rounded-3xl hover:bg-cyan-600 p-2 text-lg text-white'>
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
    </motion.div>

  )
}

export default Header