import React,{ useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import {useInView } from "react-intersection-observer";
const Cta = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const ctaVariants = {
    hidden: {translateX: '-100%', opacity: 0},
    visible: {translateX: 0, opacity:1, transition: {duration: 1}}
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section initial='hidden' animate={control} variants={ctaVariants} className=" px-4 py-10 text-center bg-DarkViolet text-white cta" ref={ref}>
      <h3 className="text-2xl font-bold">
        Boost your links today
      </h3>
      <button className="rounded-lg bg-Cyan px-4 py-2 my-4 font-semibold">
        Get Started
      </button>
    </motion.section>
  )
}

export default Cta