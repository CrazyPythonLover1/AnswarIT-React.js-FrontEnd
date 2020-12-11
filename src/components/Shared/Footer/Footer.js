import React from 'react';

const Footer = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light text-white" style={{backgroundColor:"#33334d"}}>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " style={{maxWidth:"1200px",margin: "0 auto", padding: " 0 15px", }} id="navbarNav">
  <a class="navbar-brand font-italic" href="#" style={{color: "white"}} > © Copyright 2015. All Rights Reserved by AnswarIT</a>
    <ul class="navbar-nav ml-auto" style={{color: "white"}} >
    
      <li class="nav-item active">
        <a class="nav-link" href="#" style={{color: "white" }} >  Terms of Use   </a> 
      </li>  <span style={{ borderRight:" 1px solid", margin: "auto 10px", height: " 15px"}}> </span>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color: "white", }}> Sitemap </a>
      </li>  <span style={{ borderRight:" 1px solid", margin: "auto 10px", height: " 15px"}}> </span>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color: "white"}}> Contact </a>
      </li>  
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Footer;