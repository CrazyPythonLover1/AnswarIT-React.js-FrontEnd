import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <section class="footer-area" id="footer" style={{ position: "relative" }}>
      <div class="container">
        <div class="row m-0">
          <div style={{ zIndex: "1" }} class="col-lg-6 col-md-6 col-sm-12">
            <h4 class="f-heading">About Us</h4>
            <div class="ulink f-contact">
              <ul class="widget__list">
                <li>
                  <i class="fa fa-tty" aria-hidden="true"></i>
                  <Link to="/contactUs">Contact</Link>
                </li>
                <li>
                  <i class="fa fa-list-alt" aria-hidden="true"></i>
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <i class="fa fa-sitemap" aria-hidden="true"></i>
                  {/* <Link to="#">Site map</Link> */}
                </li>
              </ul>
            </div>
          </div>
          {/* <div style={{zIndex: "1"}} class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="f-heading">Our Sister Concern</h4>
            <div class="ulink f-contact">
              <ul class="list-unstyled quick-links">
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <Link to="#"> Training (USA)</Link>
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <Link to="#"> Training (BD)</Link>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <Link to="#"> Jobsite</Link>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <Link to="#"> Job Placement Agency</Link>
                </li>
                <li>
                  <i class="fa fa-cogs" aria-hidden="true" style={{marginRight: "4px"}} ></i>
                  <Link to="#"> Software Development</Link>
                </li>
                <li>
                  <i class="fa fa-bell" aria-hidden="true" style={{marginRight: "4px"}} ></i>
                  <Link to="#"> Digital Marketing Agency</Link>
                </li>
                <li>
                  <i class="fa fa-file-text-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <Link to="#"> Amar Quiz</Link>
                </li>
                <li>
                  <i class="fa fa-file-text-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <Link to="#"> Upscale Learning</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div style={{ zIndex: "1" }} class="col-lg-6 col-md-6 col-sm-12">
            <h4 class="f-heading">Corporate Office</h4>
            <div class="f-contact">
              <span>
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Address:
                House 67, Madani Avenue, 100 Feet, Vatara, Gulshan, Dhaka,
                Bangladesh.
              </span>
              <br />
              <span>
                <i class="fa fa-phone" aria-hidden="true"></i> Phone:
                +8801710504157, +8801890803803 (Consulting & Recruiting)
              </span>
              <br />

              <span>
                <i class="fa fa-envelope-o" aria-hidden="true"></i> Email:
                theanswarit@gmail.com, dotmailit@gmail.com, info@dotmailit.com
              </span>
            </div>
          </div>
        </div>
        <div style={{ zIndex: "1" }} class="row m-0 copyright">
          <div style={{ zIndex: "1" }} class="col-md-6">
            <div class="">
              © Copyright 2019 - 2020. Developed by{""}
              {/* <Link to="#" target=""> */}
              {""} Answar IT Software {""}
              {/* </Link> */}
              {/* <Link to="https://dotmailit.com/">{""}  */}& DotMailIT
              {/* </Link> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="row f-social">
              <a href="https://www.facebook.com/answarit" target="blank">
                <FacebookIcon />
              </a>
              <Link to="/">
                <LinkedInIcon />
              </Link>
              <Link to="/">
                <InstagramIcon />
              </Link>
              <Link to="/">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
