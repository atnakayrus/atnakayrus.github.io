import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="Header">

    <div className="navbar">
        <div className="name">
            <p className='top'>Surya Kanta Ghosh</p>
            <p className='bottom'>Web and App Developer</p>
        </div>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</Link></li>
        <li><Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>Blogs</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default NavBar;
