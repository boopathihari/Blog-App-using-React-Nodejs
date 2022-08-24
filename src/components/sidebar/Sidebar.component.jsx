import React from 'react'
import './Sidebar.styles.scss'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
   
    {/* 1) About Me */}
      <div className="sidebar-item">
        <div className="sidebar-title">ABOUT ME</div>
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" className='aboutme-img' />
        <div className="aboutme-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores itaque corrupti cupiditate, quaerat officiis earum, ipsa, doloremque officia iusto nisi maxime similique porro debitis eveniet soluta aliquam nobis deserunt.
        </div>
      </div>

    {/* 2) Categories */}
      <div className="sidebar-item">
      <div className="sidebar-title">Categories</div>
      <ul className="categoriesList">
        <li className="categoryItem"><span className='badge'>Life</span> </li>
        <li className="categoryItem"><span className='badge'>Music</span></li>
        <li className="categoryItem"><span className='badge'>Style</span></li>
        <li className="categoryItem"><span className='badge'>Sport</span></li>
        <li className="categoryItem"><span className='badge'>Tech</span></li>
        <li className="categoryItem"><span className='badge'>Cinema</span></li>
      </ul>
      </div>

    {/* 3) Follow Us */}
      <div className="sidebar-item">
      <div className="sidebar-title">Follow us</div>
        <div className="socialmediaList">
        <i className="socialMedia-icon fa-brands fa-square-facebook"></i>
        <i className="socialMedia-icon fa-brands fa-square-twitter"></i>
        <i className="socialMedia-icon fa-brands fa-square-pinterest"></i>
        <i className="socialMedia-icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
