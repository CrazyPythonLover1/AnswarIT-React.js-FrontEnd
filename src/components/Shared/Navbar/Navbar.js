import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../Image/logo/Answar-IT.jpg";

const Navbar = () => {
  let { pathname } = useLocation();

  return (
    <div className="mainNavbar" style={{ width: "100%" }}>
      <nav
        class="navbar navbar-expand-md navbar-light text-white nav-container "
        style={{ backgroundColor: "" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "1.6rem",
              height: "1.6rem",
              borderRadius: "100%",
              marginRight: " 3px",
            }}
          />
          <NavLink
            class="navbar-brand  "
            to="/"
            style={{ color: "#232323", fontWeight: "900", fontSize: "1.6rem" }}
          >
            {" "}
          </NavLink>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto" style={{ color: "white" }}>
            <li class="nav-item ">
              <NavLink
                class="nav-link "
                to="/"
                style={{
                  color: "#33334d",
                  fontWeight: "500px",
                  letterSpacing: "1px",
                  padding: "0px 20px",
                }}
              >
                HOME
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/course"
                style={{ color: "#232323" }}
              >
                {" "}
                Traning & Course{" "}
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/admin"
                style={{
                  color: "#33334d",
                  fontWeight: "500px",
                  letterSpacing: "1px",
                  padding: "0px 20px",
                }}
              >
                ADMIN
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink class="nav-link " to="/overview" class="trigger-drop">
                {" "}
                ABOUT US <i class="arrow"></i>{" "}
              </NavLink>
              <ul class="drop">
                <li>
                  <NavLink to="/overview"> Overview </NavLink>
                </li>
                <li>
                  <NavLink to="/missionVision"> Mission & Vision</NavLink>
                </li>
                <li>
                  <NavLink to="/core-value"> Core Values </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <NavLink
                class="nav-link "
                to="/softwareDevelopment"
                class="trigger-drop"
              >
                {" "}
                SERVICES{" "}
              </NavLink>
              <ul class="drop">
                <li>
                  <NavLink to="/softwareDevelopment">
                    {" "}
                    SOFTWARE DEVELOPMENT{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/managementConsulting">
                    {" "}
                    MANAGEMENT CONSULTING{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/technologyConsulting">
                    {" "}
                    TECHNOLOGY CONSULTING
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/staffAugmentation">
                    {" "}
                    STAFF AUGMENTATION{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/businessProcess">
                    {" "}
                    BUSINESS PROCESS ASSURANCE{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/BpoKpo"> BPO/KPO </NavLink>
                </li>
                <li>
                  <NavLink to="/whyAnswarIT"> WHY ANSWARIT</NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/training"
                style={{ color: "#33334d", fontWeight: "500px", letterSpacing:"1px", padding: "0px 20px" }}
              >
                TRAINING
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/contactUs"
                style={{ color: "#232323" }}
              >
                {" "}
                CONTACT US{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav class="navbar navbar-expand-md navbar-light text-white" style={{backgroundColor:"#",color:"#232323", height:"70px"}}>
          <NavLink class="navbar-brand " to="/" style={{color: "#232323",fontWeight:"900", fontSize:"1.6rem"}} > ANSWARIT </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavMain" aria-controls="navbarNavMain" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " style={{maxWidth:"1200px",margin: "0 auto", padding: " 0 15px", }} id="navbarNavMain">

    <ul class="navbar-nav ml-auto" style={{color: "white"}}>
    
      <li class="nav-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/overview">About</NavLink>
      </li>
      <li class="nav-item dropdown">
        <NavLink to="/SoftwareDevelopment" class="trigger-drop" > Services<i class="arrow"></i></NavLink>
        <ul class="drop">
        <li><NavLink to="/SoftwareDevelopment"> Software Development </NavLink></li>
        <li><NavLink to="#"> Management Consulting </NavLink></li>
        <li><NavLink to="#"> Technology Consulting </NavLink></li>
        <li><NavLink to="#"> Staff Augmentation </NavLink></li>
      </ul>
      </li>
      <li class="nav-item">
        <NavLink to="/contactUs"> Contact Us</NavLink>
      </li>
    </ul>
  </div>
</nav> */}
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

      {pathname !== "/" && (
        <section class="page-top">
          <div class="container">
            <div class="row">
              <div class="col-md-12"></div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Navbar;
