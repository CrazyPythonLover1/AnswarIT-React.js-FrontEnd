import React from "react";
import services from "../../../data/services.json";
import "./Services.scss";




const Services = () => {

  return (
    <div id="services" className="container-fluid" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="main-title" > SERVICES </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {
          services.services.slice(0,6).map((item,index) => (
            <div key={`services-${index}`} className="col mb-4">
              <a href={item.url}> 
                <div className="card">
                  <img src={require(`../../../Image/services/1.${index+1}.jpg`).default} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-justify">
                    <h4 className="card-title mx-auto"> {item.title} </h4>
                      <p style={{fontWeight:"400"}}> {item.overview.substr(0, 220)}... <br/> <span style={{color: "#232323", fontWeight:" 600 "}}> Learn More </span> </p>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
