import React from 'react'
import "./navbar.scss"
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className='container'>
        <Link className='logo'>
          <img src={Logo} alt=''></img>
        </Link>
        <div className='links'>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <Link to={'/write'} className='write'>Write</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar