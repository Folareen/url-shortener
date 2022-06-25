import React from 'react'
import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconPinterest from '../images/icon-pinterest.svg'
import iconTwitter from '../images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className="text-center footer flex flex-col bg-VeryDarkViolet p-4">
      <h2>
        Shortly
      </h2>
      <div className="">
        <h4 className="">
          Features
        </h4>
        <a href="" className="links">Link Shortening</a>
        <a href="" className="links">Branded Links</a>
        <a href="" className="links">Analytics</a>
      </div>
      <div className="">
        <h4 className="">
          Resources
        </h4>
        <a href="" className="links">Blog</a>
        <a href="" className="links">Developers</a>
        <a href="" className="links">Support</a>
      </div>
      <div className="">
        <h4 className="">
          Company
        </h4>
        <a href="" className="links">About</a>
        <a href="" className="links">Our Team</a>
        <a href="" className="links">Careers</a>
        <a href="" className="links">Contact</a>
      </div>
      <div className='socials flex justify-between p-2 flex-row w-1/2 mx-auto '>
        <img src={iconFacebook} alt="" />
        <img src={iconPinterest} alt="" />
        <img src={iconInstagram} alt="" />
        <img src={iconTwitter} alt="" />
      </div>
      <div className="text-Gray flex flex-row my-2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-Cyan' >Frontend Mentor</a>
        Coded by <a href="https://www.twitter.com/__Folareen__" className="text-Cyan">Folareen</a>
      </div>
    </footer>
  )
}

export default Footer