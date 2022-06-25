import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <footer classname="">
      <img src={logo} alt=""  classname=""/>
      <div classname="">
        <h4 classname="">
          Features
        </h4>
        <a href="" classname="">Link Shortening</a>
        <a href="" classname="">Branded Links</a>
        <a href="" classname="">Analytics</a>
      </div>
      <div classname="">
        <h4 classname="">
          Resources
        </h4>
        <a href="" classname="">Blog</a>
        <a href="" classname="">Developers</a>
        <a href="" classname="">Support</a>
      </div>
      <div classname="">
        <h4 classname="">
          Company
        </h4>
        <a href="" classname="">About</a>
        <a href="" classname="">Our Team</a>
        <a href="" classname="">Careers</a>
        <a href="" classname="">Contact</a>
      </div>
      <div classname="">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#" classname="">Folareen</a>.
      </div>
    </footer>
  )
}

export default Footer