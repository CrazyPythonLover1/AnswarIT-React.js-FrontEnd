import React from "react";
import "./Header.css";
import image1 from "../../../Image/header-image/1.1.jpg";
import image2 from "../../../Image/header-image/1.2.jpg";
import image3 from "../../../Image/header-image/1.3.jpg";
import image4 from "../../../Image/header-image/1.4.jpg";
import image5 from "../../../Image/header-image/1.5.jpg";
import image6 from "../../../Image/header-image/1.6.jpg";
import image7 from "../../../Image/header-image/1.7.jpg";

const Header = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={image1}
              class="d-block w-100 carousel-img"
              style={{ height: "100%" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image5} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image6} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image7} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <p>
      PeopleNTech is a global IT and Engineering solutions provider whose business focus is in Development, Outsourcing, and Consulting. We are a Global Technology company with Customer Focus as one of our Core Values. We are Agile. We are always present with the right solutions at the right place and the right time to meet your requirements. Our offerings are IP oriented, tried and tested over time. We strive to ensure that our Clients are the front runners and equipped with latest technologies.
      </p>
    </div>
  );
};

export default Header;
