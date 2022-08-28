import React from 'react'
import './Navbar.styles.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = false;
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
                <li className='navLink'>
                  <Link className='link' to='/'>HOME</Link>
                  </li>
                <li className='navLink'>
                  <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className='navLink'>
                  <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className='navLink'>
                  <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className='navLink'>
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>

        <div className="top-right">
          { 
            user ? <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="profile" className='profile' />
            :
             <ul className='navLinks'>
                <li className='navLink'>
                  <Link className='link' to='/login'>LOGIN</Link>
                </li>
                <li className='navLink'>
                  <Link className='link' to='/register'>REGISTER</Link>
                </li>
              </ul>
          }
          <i className='search-icon fa-solid fa-magnifying-glass'></i>
        </div>
    </div>
  )
}
