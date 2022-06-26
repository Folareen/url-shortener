import React from 'react';
import working from '../images/illustration-working.svg'

const Hero = () => {
  return (
    <section className='w-full min-h-screen p-4 lg:px-20 relative z-10'>
        <div className='flex flex-col h-4/5 content-center'>
            <div className='w-full ml-20'>
                <img src={working} alt="working illustration"  className='w-full h-full'/>
            </div>
            <div className='w-full text-center mt-4'>
                <h2 className='text-5xl font-bold my-3 text-DarkViolet'>
                    More than just shorter links
                </h2>
                <p className='text-Gray font-semibold my-4 text-xl'>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className=' bg-Cyan rounded-3xl py-3 px-8 text-white font-bold my-3 hover:bg-cyan-600'>
                    Get Started
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero