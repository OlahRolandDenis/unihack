import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="profile">
            <img src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1.jpg" alt="" />
        </div>
    </nav>
  )
}

export default NavBar