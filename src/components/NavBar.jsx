import { Link, useLocation } from 'react-router-dom';
import { toggleTheme } from '../logic/globals';
import { useEffect } from 'react';

function NavBar() {
  const location = useLocation()

  useEffect(()=>{
    const theme = localStorage.getItem('theme')
    if(theme=='light'){
      document.body.classList.remove('dark')
    }else{
      document.body.classList.add('dark')
    }
  })

  return (
    <div className="Header">

    <div className="navbar">
        <div className="name">
            <p className='top'>Surya Kanta Ghosh</p>
            <p className='bottom'>Web and App Developer</p>
        </div>
      <ul className="nav-links">
        <li><div className="dark_theme_button invertible" onClick={toggleTheme}><img src="/night-mode.png" alt="" /></div></li>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</Link></li>
        <li><Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Skills</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default NavBar;
