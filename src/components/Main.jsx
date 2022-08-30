import React,{useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import {useInView } from "react-intersection-observer";
import LinksContainer from './LinksContainer'
import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecords from '../images/icon-detailed-records.svg'
import fullyCustomizable from '../images/icon-fully-customizable.svg'

const Main = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  const headerVariants = {
    hidden: {scaleY: 0, opacity: 0, bottom: '-10px'},
    visible: {scaleY: 1, opacity: 1, bottom: 0, transition: {duration: 1}}
  }

  const firstStatVariants = {
    hidden: {opacity: 0,  rotate: '-30deg'},
    visible: {opacity: 1,  rotate: 0, transition: {duration: 2}}
  }
  const secondStatVariants = {
    hidden: {opacity: 0, translateY: '50px', scale:0},
    visible: {opacity: 1, translateY: 0,scale: 1, transition: {duration: 2}}
  }
  const thirdStatVariants = {
    hidden: {opacity: 0, rotate: '30deg'},
    visible: {opacity: 1, rotate: 0, transition: {duration: 2}}
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <main className="bg-Gray text-center py-4 px-6 lg:px-0 " ref={ref}>
      <LinksContainer />
      <motion.h3 variants={headerVariants} initial='hidden' animate={control}className="text-2xl lg:text-3xl font-bold mt-10 text-VeryDarkViolet relative">
        Advanced Statistics
      </motion.h3>
      <motion.p variants={headerVariants} initial='hidden' animate={control}  className="font-semibold text-GrayishViolet lg:mb-5 sm:mb-20 lg:text-xl relative">
        Track how your links are performing across the web with our 
        advanced statistics dashboard.
      </motion.p>
      <div className="h-max lg:flex lg:flex-row items-center lg:mx-40 relative" ref={ref}>
        <div className='h-full w-2 bg-Cyan absolute translate-x-1/2 right-1/2 lg:w-full lg:h-2 lg:translate-y-1/2 lg:bottom-1/2'>
        </div>
        <motion.div className="stat lg:mt-0" variants={firstStatVariants} initial='hidden' animate={control} ref={ref}>
          <img src={brandRecognition} alt=""  className=""/>
          <h4 className="">
            Brand Recognition
          </h4>
          <p className="">
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </motion.div>
        <motion.div className="stat lg:mt-[100px] lg:mx-7" variants={secondStatVariants} initial='hidden' animate={control} ref={ref}>
          <img src={detailedRecords} alt=""  className=""/>
          <h4 className="">
            Detailed Records
          </h4>
          <p className="">
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </motion.div >
        <motion.div className="stat lg:mt-[200px]" variants={thirdStatVariants} initial='hidden' animate={control} ref={ref}>
          <img src={fullyCustomizable} alt=""  className=""/>
          <h4 className="">
            Fully Customizable
          </h4>
          <p className="">
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </motion.div>
      </div>
    </main>
  )
}

export default Main