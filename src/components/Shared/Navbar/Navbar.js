import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">
          <nav class="navbar navbar-expand-md navbar-light text-white" style={{color:"#232323", height:"70px"}}>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " style={{maxWidth:"1200px",margin: "0 auto", padding: " 0 15px", }} id="navbarNav">
  <NavLink class="navbar-brand " to="/" style={{color: "#232323",fontWeight:"900", fontSize:"1.6rem"}} > ANSWARIT </NavLink>
    <ul class="navbar-nav ml-auto" style={{color: "white"}}>
    
      <li class="nav-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/overview">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/SoftwareDevelopment" class="trigger-drop"> Services<i class="arrow"></i></NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/contactUs"> Contact Us</NavLink>
      </li>
    </ul>
  </div>
</nav>
            {/* <nav id="navigation">
                <div className="inner-nav-container">
                <Link to="#" class="logo"> AnswarIT <span>+</span></Link>
  <ul class="links">
    <li><Link to="/">Home</Link></li>
    <li> <Link to="/overview">About</Link> </li>
    <li class="dropdown"><Link to="/SoftwareDevelopment" class="trigger-drop"> Services<i class="arrow"></i></Link>
      <ul class="drop">
        <li><Link to="/SoftwareDevelopment"> Software Development </Link></li>
        <li><Link to="#"> Management Consulting </Link></li>
        <li><Link to="#"> Technology Consulting </Link></li>
        <li><Link to="#"> Staff Augmentation </Link></li>
      </ul>
    </li>
    <li> <Link to="/contactUs"> Contact Us</Link> </li>

    <li class="dropdown"><Link to="#" class="trigger-drop">Contact Us<i class="arrow"></i></Link>
      <ul class="drop">
        <li><Link to="#">Email</Link></li>
        <li><Link to="#">Phone</Link></li>
      </ul>
    </li>
  </ul>
</div>

</nav> */}

<section class="page-top">
				<div class="container">
					<div class="row">
						<div class="col-md-12">

						</div>
					</div>
				</div>
			</section>

        </div>
        
        );
};

export default Navbar;