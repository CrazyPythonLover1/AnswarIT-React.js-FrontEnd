import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
      <section class="footer-area" id="footer" style={{position: "relative"}}>
      <div class="container">
        <div class="row m-0">
          <div style={{zIndex: "1"}} class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="f-heading">About Us</h4>
            <div class="ulink f-contact">
              <ul class="widget__list">
                <li>
                  <i class="fa fa-tty" aria-hidden="true"></i>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <i class="fa fa-list-alt" aria-hidden="true"></i>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <i class="fa fa-sitemap" aria-hidden="true"></i>
                  <a href="#">Site map</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{zIndex: "1"}} class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="f-heading">Our Sister Concern</h4>
            <div class="ulink f-contact">
              <ul class="list-unstyled quick-links">
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <a href="#"> Training (USA)</a>
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <a href="#"> Training (BD)</a>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <a href="#"> Jobsite</a>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <a href="#"> Job Placement Agency</a>
                </li>
                <li>
                  <i class="fa fa-cogs" aria-hidden="true" style={{marginRight: "4px"}} ></i>
                  <a href="#"> Software Development</a>
                </li>
                <li>
                  <i class="fa fa-bell" aria-hidden="true" style={{marginRight: "4px"}} ></i>
                  <a href="#"> Digital Marketing Agency</a>
                </li>
                <li>
                  <i class="fa fa-file-text-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <a href="#"> Amar Quiz</a>
                </li>
                <li>
                  <i class="fa fa-file-text-o" aria-hidden="true" style={{marginRight: "6px"}} ></i>
                  <a href="#"> Upscale Learning</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{zIndex: "1"}} class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="f-heading">Corporate Office</h4>
            <div class="f-contact">
              <span><i class="fa fa-location-arrow" aria-hidden="true"></i> Address: 40-20 39th Avenue, Suite #400 Long Island City, NY 11101
                220, Vienna, VA 22182</span><br />
              <span><i class="fa fa-phone" aria-hidden="true"></i> Phone: +8801710504157 (Consulting & Recruiting)</span><br/>
              
              <span><i class="fa fa-envelope-o" aria-hidden="true"></i> Email: info@answarit.com, shownahmed6666@gmail.com </span>
            </div>
          </div>
        </div>
        <div style={{zIndex: "1"}} class="row copyright">
          <div style={{zIndex: "1"}} class="col-md-6">
            <div class="">
              © Copyright 2019 - 2020. Developed by <a href="#" target="">
                AnswarIT </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row f-social">
              <a href="javascript:void(0);"><i class="icofont-facebook"></i></a>
              <a href="javascript:void(0);"><i class="icofont-linkedin"></i></a>
              <a href="javascript:void(0);"><i class="icofont-instagram"></i></a>
              <a href="javascript:void(0);"><i class="icofont-twitter"></i></a>
              <a href="javascript:void(0);"><i class="icofont-youtube-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Footer;