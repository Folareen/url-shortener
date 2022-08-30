import React from 'react';
import working from '../images/illustration-working.svg'
import { motion} from "framer-motion";
const Hero = () => {
    const imgVariants = {
        hidden: {right: '-100vw', top: '-20vh', opacity: 0},
        visible: {right: 0, top: 0, opacity: 1, transition: {duration: 1.5}}
    }
    const textVariants = {
        hidden: {left: '-100vw', bottom: '-20vh', opacity: 0},
        visible: {left: 0,bottom: 0, opacity: 1, transition: {duration: 1.5}}
    }

  return (
        <section className='w-full py-4 pl-4 lg:pl-40 relative z-10 lg:mb-10'>
            <div className='flex flex-col h-4/5 lg:flex-row-reverse lg:mt-10 lg:mb-20'>
                <motion.div initial='hidden' animate='visible' variants={imgVariants} className='w-full lg:w-1/2 ml-[25px] mr-[-25px]  relative '>
                    <img src={working} alt="working illustration"  className='w-full h-full '/>
                </motion.div>
                <motion.div initial='hidden' animate='visible' variants={textVariants}  className='w-full text-center lg:text-left mt-4 lg:w-1/2 lg:h-full lg:py-3 lg:mr-[30px] relative'>
                    <h2 className='lg:text-7xl text-5xl font-bold my-3 text-DarkViolet'>
                        More than just shorter links
                    </h2>
                    <p className='text-GrayishViolet font-semibold my-4 text-xl'>
                        Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <button className=' bg-Cyan rounded-3xl py-3 px-8 text-white font-bold mt-8 mb-16 hover:bg-cyan-600 '>
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
  )
}

export default Hero