import React from 'react';

const Footer = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light text-white" style={{backgroundColor:"#33334d"}}>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " style={{maxWidth:"1200px",margin: "0 auto", padding: " 0 15px", }} id="navbarNav">
  <a class="navbar-brand font-italic" href="#" style={{color: "white"}} >Networking People with the Latest Technologies...</a>
    <ul class="navbar-nav ml-auto" style={{color: "white"}}>
    
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Footer;