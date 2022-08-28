import Hero from '../../components/HeroSection/Hero.component';
import Posts from '../../components/posts/Posts.component'; 
import Sidebar from '../../components/sidebar/Sidebar.component';
import './Home.styles.scss'; 

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
