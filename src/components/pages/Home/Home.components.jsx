import React from 'react'
import Hero from '../../HeroSection/Hero.component';
import './Home.styles.scss'; 
import Posts from '../../posts/Posts.component'; 
import Sidebar from '../../sidebar/Sidebar.component';

export default function Home() {
  return (
    <div>
        <Hero/>
        <div className="home-conatiner">
          <Posts></Posts>
          <Sidebar></Sidebar>
        </div>
    </div>
  )
}
