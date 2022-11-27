import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
              <img src={logo} alt="" />
        </div>

        <div className="profile">
            <Link to="/profile">
              <img src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1.jpg" alt="" />
            </Link>
        </div>
    </nav>
  )
}

export default NavBar