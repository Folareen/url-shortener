import React from 'react';
import logo from '../images/logo.svg';
import working from '../images/illustration-working.svg'

const Hero = () => {
  return (
    <header className='w-full min-h-screen p-4 lg:px-20 relative'>
        <nav className='flex justify-between mb-4 h-1/5'>
            <img src={logo} alt="logo"  className='w'/>
            <div className="flex flex-col absolute  top-16 bg-DarkViolet text-white  lg:text-Gray align-se rounded-lg p-6 text-center font-semibold max-w-md w-full ">
                <div className='flex flex-col '>
                    <a href="" className='p-2 hover:text-Gray'>
                        Features
                    </a>
                    <a href="" className='p-2 hover:text-Gray'>
                        Pricing
                    </a>
                    <a href="" className='border-b-2 p-2 hover:text-Gray'>
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
            </div>
            <button className='inline-flex lg:hidden'>
                =
            </button>
        </nav>
        <div className='flex flex-col h-4/5 content-center justify-center'>
            <div className='w-full  ml-20'>
                <img src={working} alt="working illustration"  className='w-full'/>
            </div>
            <div className='w-full text-center'>
                <h2 className='text-4xl font-bold my-3 text-DarkViolet'>
                    More than just shorter links
                </h2>
                <p className='text-Gray font-semibold my-3'>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className=' bg-Cyan rounded-3xl py-2 px-4 text-white font-semibold my-2 hover:bg-cyan-600'>
                    Get Started
                </button>
            </div>
        </div>
    </header>
  )
}

export default Hero