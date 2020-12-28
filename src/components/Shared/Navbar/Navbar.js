import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav id="navigation">
                <div className="inner-nav-container">
                <Link to="#" class="logo"> AnswarIT<span>+</span></Link>
  <ul class="links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/overview">About</Link></li>
    <li class="dropdown"><Link to="#" class="trigger-drop"> Services<i class="arrow"></i></Link>
      <ul class="drop">
        <li><Link to="#"> Software Development </Link></li>
        <li><Link to="#"> Management Consulting </Link></li>
        <li><Link to="#"> Technology Consulting </Link></li>
        <li><Link to="#"> Staff Augmentation </Link></li>
      </ul>
    </li>
    <li><Link to="/contactUs"> Contact Us</Link></li>

    {/* <li class="dropdown"><Link to="#" class="trigger-drop">Contact Us<i class="arrow"></i></Link>
      <ul class="drop">
        <li><Link to="#">Email</Link></li>
        <li><Link to="#">Phone</Link></li>
      </ul>
    </li> */}
  </ul>
</div>

</nav>
        </div>
        
        );
};

export default Navbar;