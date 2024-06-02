import React from 'react'
import "./footer.scss"
import Logo from "../../img/BlogSpot2.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logo} alt=''/>
      <span>Made with Love by Nipun Jain</span>
    </footer>
  )
}

export default Footer