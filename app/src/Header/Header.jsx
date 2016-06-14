import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
      <div className='brand'>
        Matt Szabo
      </div>
      <div className='navbar'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header;
