import React from 'react';
import logo from '../images/logo.svg';
import working from '../images/illustration-working.svg'

const Hero = () => {
  return (
    <header className='container'>
        <nav className='flex'>
            <img src={logo} alt="logo"  className=''/>
            <div className=''>
                <a href="" className=''>
                    Features
                </a>
                <a href="" className=''>
                    Pricing
                </a>
                <a href="" className=''>
                    Resources
                </a>
            </div>
            <div className=''>
                <a href="" className=''>
                    Login
                </a>
                <a href="" className=''>
                    Sign Up
                </a>
            </div>
            <button className='inline-flex lg:hidden'>
                =
            </button>
        </nav>
        <div>
            <div className=''>
                <img src={working} alt="working illustration"  className=''/>
            </div>
            <div>
                <h2 className=''>
                    More than just shorter links
                </h2>
                <p className=''>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className=''>
                    Get Started
                </button>
            </div>
        </div>
    </header>
  )
}

export default Hero