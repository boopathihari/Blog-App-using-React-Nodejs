import React from 'react'
import './Navbar.styles.scss';

export default function Navbar() {
  return (
    <div className='Navbar-container'>
        <div className="top-left">
        <i className="Top-icon fa-brands fa-square-facebook"></i>
        <i className="Top-icon fa-brands fa-square-twitter"></i>
        <i className="Top-icon fa-brands fa-square-pinterest"></i>
        <i className="Top-icon fa-brands fa-square-instagram"></i>
        </div>

        <div className="top-center">
            <ul className='navLinks'>
                <li className='navLink'>Home</li>
                <li className='navLink'>About</li>
                <li className='navLink'>Contact</li>
                <li className='navLink'>Write</li>
                <li className='navLink'>Logout</li>
            </ul>
        </div>

        <div className="top-right">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="profile" className='profile' />
          <i className='search-icon fa-solid fa-magnifying-glass'></i>
        </div>
    </div>
  )
}
