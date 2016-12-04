import React from 'react'
import { Link } from 'react-router'
import './navbar.css'

const NavBar = ({ isLoggedIn }) => (
  <nav className='navbar'>
  
    <div className='navbar-left'>
      <span className='brand'>Brand</span>
    </div>

    <div className='navbar-right'>
      {isLoggedIn || isLoggedIn === undefined
        ? <Link to='/login' className='login'>Login</Link>
        : <Link to='/' className='logout'>Logout</Link>
      }
    </div>
  </nav>
)


export default NavBar
