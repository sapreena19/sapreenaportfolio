import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import contactImg from '../../image/contacts.png';
const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false)
  return (
    <nav className="navbar">
     <Link className='portfolio'>Portfolio</Link>
        <div className="desktopMenu">
         
            <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
      
        <Link activeclass='active' to='about' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">About</Link>
            <Link activeclass='active' to='service' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">Service</Link>
        <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Skills</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
        
        }
        

        }>
            <img src={contactImg} alt="" className="desktopMenuImg"/>Contact me

        </button>
        <div className='mobMenu'onClick={()=>setShowMenu(!showMenu)}>
        <i class='bx bx-menu-alt-right'></i>
        </div>

        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
         
         <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
   
     <Link activeclass='active' to='about' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
         <Link activeclass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Service</Link>
     <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
     <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
    
     </div>
    
    </nav>
  ) 
        }
    
  

export default Navbar;