import React from 'react';

const TopNavbar = () => {
    return (
        <div className="topnavbar">
            <nav class="navbar navbar-expand-md navbar-light text-white p-1" style={{backgroundColor:"#5c10e3"}} >
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " style={{maxWidth:"1200px",margin: "0 auto", padding: " 0 55px", }} id="">
  <a class="navbar-brand font-italic" href="#" style={{color: "white"}} > Think out of the box.....</a>
    <ul class="navbar-nav ml-auto" style={{color: "white"}}>
    
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default TopNavbar;