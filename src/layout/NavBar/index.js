import React from 'react'
import './navbar.css'

const NavBar = ({ isLoggedIn }) => (
  <nav className='navbar'>
  
    <div className='navbar-left'>
      <span className='brand'>Brand</span>
    </div>

    <div className='navbar-right'>
      {isLoggedIn || isLoggedIn === undefined
        ? <span className='login'>Login</span>
        : <span className='logout'>Logout</span>
      }
    </div>
  </nav>
)


export default NavBar
