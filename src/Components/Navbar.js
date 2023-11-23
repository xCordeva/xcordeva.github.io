import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import '../Styles/Navbar.css';

export default function Navbar() {

  const [isTransparent, setTransparent] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if(window.scrollY > 0){
        setTransparent(true);
      }
      else{
        setTransparent(false);
      }
    };
    
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className="nav-container">
      <div className={`navbar ${isTransparent ? 'transparent' : ''}`}>
        <a className='nav-button' href='https://xcordeva.github.io/my-blog-React-JS/' target='_blank'>
          My Blog
        </a>
        <nav>
          <Link to="about" smooth={true} duration={750}>About</Link>
          <Link to='skills' smooth={true} duration={750}>Skills</Link>
          <Link to='projects' smooth={true} duration={750}>Projects</Link>
          <Link to='eduction' smooth={true} duration={750}>Eduction</Link>
          <Link to='contact' smooth={true} duration={750}>Contact</Link>
        </nav>
        <a className='nav-button' href='https://github.com/xCordeva' target='_blank'>
        <FontAwesomeIcon icon={faGithub}/>
        GitHub Profile
        </a>
      </div>
    </div>
  )
}
