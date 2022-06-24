import React from 'react';
import logo from '../images/logo.svg';
import working from '../images/illustration-working.svg'

const Hero = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="logo" />
            <div>
                <a href="">
                    Features
                </a>
                <a href="">
                    Pricing
                </a>
                <a href="">
                    Resources
                </a>
            </div>
            <div>
                <a href="">
                    Login
                </a>
                <a href="">
                    Sign Up
                </a>
            </div>
            <button>
                =
            </button>
        </nav>
        <div>
            <div>
                <img src={working} alt="working illustration" />
            </div>
            <div>
                <h2>
                    More than just shorter links
                </h2>
                <p>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button>
                    Get Started
                </button>
            </div>
        </div>
    </header>
  )
}

export default Hero