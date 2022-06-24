import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <div>
        <h4>
          Features
        </h4>
        <a href="">Link Shortening</a>
        <a href="">Branded Links</a>
        <a href="">Analytics</a>
      </div>
      <div>
        <h4>
          Resources
        </h4>
        <a href="">Blog</a>
        <a href="">Developers</a>
        <a href="">Support</a>
      </div>
      <div>
        <h4>
          Company
        </h4>
        <a href="">About</a>
        <a href="">Our Team</a>
        <a href="">Careers</a>
        <a href="">Contact</a>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Folareen</a>.
      </div>
    </footer>
  )
}

export default Footer