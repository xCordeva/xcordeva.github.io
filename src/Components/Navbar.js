import { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import '../Styles/Navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  const [menuClicked, setMenuClicked] = useState(false)
    
  const mobileMenuClicked = ()=>{
    setMenuClicked(!menuClicked)
  }

  return (
    <div className="nav-container">

      <div className='navbar'>

        <div className="desktop-menu">
          <a className='nav-button' href='https://github.com/xCordeva' target='_blank'>
          <FontAwesomeIcon icon={faGithub}/>
          GitHub Profile
          </a>

          <nav>
            <Link to="about" smooth={true} duration={750}>About</Link>
            <Link to="skills" smooth={true} duration={750}>Skills</Link>
            <Link to="projects" smooth={true} duration={750}>Projects</Link>
            <Link to="education" smooth={true} duration={750}>Education</Link>
            <Link to="contact" smooth={true} duration={750}>Contact</Link>
          </nav>

          <a className='nav-button' href='https://xcordeva.github.io/my-blog-React-JS/' target='_blank'>
            My Blog
          </a>
        </div>

        {/* reusing code since i am goin to chang the arrangement */}
        <div className="mobile-menu">
          <a className='nav-button' href='https://github.com/xCordeva' target='_blank'>
          <FontAwesomeIcon icon={faGithub}/>
          GitHub Profile
          </a>
          <FontAwesomeIcon id="menu-icon" icon={faBars} onClick={mobileMenuClicked} />
          <div className={`mobile-menu-items ${menuClicked ? `menu-clicked` : ``}`}>

            <nav>
              <Link to="about" smooth={true} duration={750} onClick={mobileMenuClicked} >About</Link>
              <Link to="skills" smooth={true} duration={750} onClick={mobileMenuClicked} >Skills</Link>
              <Link to="projects" smooth={true} duration={750} onClick={mobileMenuClicked} >Projects</Link>
              <Link to="education" smooth={true} duration={750} onClick={mobileMenuClicked} >Education</Link>
              <Link to="contact" smooth={true} duration={750} onClick={mobileMenuClicked} >Contact</Link>
            </nav>

            <a className='nav-button' href='https://xcordeva.github.io/my-blog-React-JS/' target='_blank'>
              My Blog
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}