import React from "react";
import "./Services.scss"
import services from "../../../data/services.json";
import { Link } from "react-router-dom";




const Services = () => {

  return (
    <div id="services" className="container-fluid">
      <h2 className="main-title" > SERVICES </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {
          services.services.slice(0,6).map((item,index) => (
            <div key={`services-${index}`} className="col mb-4">
              <a href={item.url}> 
                <div className="card">
                  <img src={require(`../../../Image/serices/1.${index+1}.jpg`).default} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-justify">
                    <h4 className="card-title mx-auto"> {item.title} </h4>
                      {item.overview.substr(0, 220)} .....
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
