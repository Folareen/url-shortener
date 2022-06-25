import React from 'react'
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className='w-full p-4 lg:px-20 relative flex justify-between'>
        <img src={logo} alt="logo"  className='w'/>
        <nav className="flex flex-col absolute  top-16 bg-DarkViolet text-white  lg:text-Gray rounded-lg p-6 text-center font-semibold  right-5 left-5 z-20">
            <div className='flex flex-col '>
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
            <div className='flex flex-col'>
                <a href="" className='p-2 hover:text-Gray'>
                    Login
                </a>
                <a href="" className='py-2 px-4 bg-Cyan rounded-3xl hover:bg-cyan-600'>
                    Sign Up
                </a>
            </div>
        </nav>
        <button className='inline-flex lg:hidden'>
            =
        </button>
    </header>
  )
}

export default Header