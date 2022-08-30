import React,{ useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import {useInView } from "react-intersection-observer";
import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconPinterest from '../images/icon-pinterest.svg'
import iconTwitter from '../images/icon-twitter.svg'

const Footer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const footerVariants = {
    hidden: {translate: '100%', opacity: 0},
    visible: {translate: 0, opacity: 1, transition: {duration: 2}}
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);



  return (
    <motion.footer initial='hidden' variants={footerVariants} animate={control} ref={ref} className="text-center lg:text-left footer flex flex-col bg-VeryDarkViolet p-4 lg:flex-row lg:justify-between lg:px-40 ">
      <h2 className=''>
        Shortly
      </h2>
      <div className="">
        <h4 className="">
          Features
        </h4>
        <a href="#" className="links">Link Shortening</a>
        <a href="#" className="links">Branded Links</a>
        <a href="#" className="links">Analytics</a>
      </div>
      <div className="">
        <h4 className="">
          Resources
        </h4>
        <a href="#" className="links">Blog</a>
        <a href="#" className="links">Developers</a>
        <a href="#" className="links">Support</a>
      </div>
      <div className="">
        <h4 className="">
          Company
        </h4>
        <a href="#" className="links">About</a>
        <a href="#" className="links">Our Team</a>
        <a href="#" className="links">Careers</a>
        <a href="#" className="links">Contact</a>
      </div>
      <div className='socials flex justify-between p-2 flex-row w-1/2 mx-auto lg:mx-0 items-center lg:w-1/5'>
        <img src={iconFacebook} alt="" />
        <img src={iconPinterest} alt="" />
        <img src={iconInstagram} alt="" />
        <img src={iconTwitter} alt="" />
      </div>
    </motion.footer>
  )
}

export default Footer