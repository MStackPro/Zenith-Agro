import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import {navlinks} from './data'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav className=''>
      <div className="container nav-container">
        {/* ============= NAV LOGO ========== */}
        <Link to='/' className='nav-logo'>
          <img src={Logo} alt="logo" />
        </Link>


        <ul className={`nav-menu active ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
          {
            navlinks.map(({name, path}, index) => {
              return (
                <li key={index} className='text-1xl hover:text-ColorSecondary transition-all duration-500 ease-in-out font-semibold'>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav-btn text-dark' onClick={() => setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ? <FiX/> : <FiMenu/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar