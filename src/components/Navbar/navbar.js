import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false);
  return (
    <nav className="navbar">

        <img src={logo} alt="Logo" className='logo' />
        <div className="classroom">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='topitemlist'>Home</Link>
            <Link activeClass='active' to='skilltittle' spy={true} smooth={true} offset={-100} duration={500} className='topitemlist'>About me</Link>
            
            <Link activeClass='active' to='myskill' spy={true} smooth={true} offset={-100} duration={500} className='topitemlist'>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-520} duration={500} className='topitemlist'>Projects</Link>
        </div>

        <button className="topbutton" onClick={()=>{
          document.getElementById('contactpage').scrollIntoView({behavior:'smooth'});
        }}>
          <span className='topicon'><i class="fa-solid fa-id-card-clip"></i></span>
            Contact me
        </button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skilltittle' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About me</Link>            
            <Link activeClass='active' to='myskill' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-520} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-520} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar;