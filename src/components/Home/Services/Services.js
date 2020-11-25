import React from "react";

import services from "../../../data/services.json";




const Services = () => {

  
  console.log(services.services[0].overview);

  return (
    <div id="Services" className="container-fluid">
      <h3> SERVICES </h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {
          services.services.slice(0,6).map((item,index) => (
            <div key={`services-${index}`} className="col mb-4">
              <div className="card">
              <h5 className="card-title">Card title</h5>
                
                <img src={require(`../../../Image/serices/1.${index+1}.jpg`).default} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-justify">
                    {item.overview.substr(0, 250)} .....
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
