import React from 'react'
import './navbar.css'
import  logo from'../../images/logo.png';
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />
      <div className="des">
        <Link activeClass='active'to='sec' spy={true} smooth={true} offset={-100} duration={500}  className="desListItem">Home</Link>
        <Link activeClass='active'to='bottom' spy={true} smooth={true} offset={-100} duration={500}  className="desListItem">Service</Link>
        <Link activeClass='active'to='work' spy={true} smooth={true} offset={-100} duration={500}  className="desListItem">Explore</Link>
        <Link activeClass='active'to='secpage' spy={true} smooth={true} offset={-100} duration={500}  className="desListItem">About us</Link>
      </div>
      <button className="desbtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}><i class="fa-regular fa-message"></i>contact</button>

</nav>
  )
}

export default Navbar