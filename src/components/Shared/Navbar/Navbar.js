import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Image/logo/Answar-IT.jpg";
import "./Navbar.scss";

const Navbar = () => {
  let { pathname } = useLocation();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleLogout = () => {
    sessionStorage.setItem("loggedInUser", JSON.stringify({ name: "logout" }));
    setLoggedInUser({});
  };

  return (
    <div className="mainNavbar" style={{ width: "100%" }}>
      <nav
        class="navbar navbar-expand-lg navbar-light text-white nav-container "
        style={{ backgroundColor: "" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "100%",
              marginRight: " 3px",
            }}
          />
          {/* <NavLink
            class="navbar-brand  "
            to="/"
            style={{ color: "#232323", fontWeight: "900", fontSize: "1.6rem" }}
          ></NavLink> */}
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
                ABOUT US <i class="arrow"></i>
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
                SERVICES <i class="arrow"></i>
              </NavLink>
              <ul class="drop">
                <li>
                  <NavLink to="/softwareDevelopment">
                    SOFTWARE DEVELOPMENT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/managementConsulting">
                    MANAGEMENT CONSULTING
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/technologyConsulting">
                    TECHNOLOGY CONSULTING
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/staffAugmentation">STAFF AUGMENTATION</NavLink>
                </li>
                <li>
                  <NavLink to="/businessProcess">
                    BUSINESS PROCESS ASSURANCE
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
                style={{ color: "#232323" }}
              >
                TRAINING 
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/career"
                style={{
                  color: "#33334d",
                  fontWeight: "500px",
                  letterSpacing: "1px",
                  padding: "0px 20px",
                }}
              >
                CAREER
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/product"
                style={{ color: "#232323" }}
              >
                PRODUCT
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link "
                to="/contactUs"
                style={{ color: "#232323" }}
              >
                CONTACT US
              </NavLink>
            </li>

            {loggedInUser?.name === "logout" || !loggedInUser?.name ? (
              <li class="nav-item login-logout">
                <NavLink
                  class="nav-link "
                  to="/login"
                  style={{
                    paddingRight: "10px",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    style={{
                      marginTop: "-10%",
                    }}
                  >
                    LOGIN
                  </button>
                </NavLink>
              </li>
            ) : (
              <>
                <li class="nav-item login-logout">
                  <NavLink class="nav-link " to="">
                    <button
                      className="btn btn-primary"
                      style={{
                        marginTop: "-10%",
                      }}
                      onClick={() => handleLogout()}
                    >
                      LOGOUT
                    </button>
                  </NavLink>
                </li>

                {/* //  <li
            // class="nav-item" 
            //   style={{
            //     color: "black",
            //     fontWeight: "bold",
            //     margin: "auto 5px",
            //   }}
            // >
            //   {loggedInUser?.name === "logout" ? "" : loggedInUser?.name}
            // </li>  */}

                <li
                  class="nav-item login-logout avatar"
                  style={{
                    margin: "-7px 5px",
                  }}
                >
                  <img
                    className="rounded-circle"
                    style={{ height: "35px" }}
                    src={loggedInUser?.picture}
                    alt=""
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

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
