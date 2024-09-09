import React from 'react'
import './navbar.css'
import logo from '../../asset/logo.png'
import srch from '../../asset/search_icon.svg'
import bell from '../../asset/bell_icon.svg'
import pfile from '../../asset/profile_img.png'
import cret from '../../asset/caret_icon.svg'
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movie</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browser by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={srch} alt="" className='icons' />
          <p>Children</p>
          <img src={bell} alt="" className='icons' />
          <div className="navbar-profile">
            <img src={pfile} alt="" className='profile' />
            <img src={cret} alt="" />

            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
