import React from 'react'
import './navbar.css'

const NavBar = () => (
  <nav className='navbar'>
    <div className='navbar-left'>
      <span className='brand'>Brand</span>
    </div>
    <div className='navbar-right'>
      <span className='login'>Login</span>
    </div>
  </nav>
)

export default NavBar
