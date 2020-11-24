import React from "react";

import services from "../../../data/services.json";




const Services = () => {

  

  return (
    <div id="Services" className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3">
        {
          services.services?.map((item,index) => (
            <div key={`services-${index}`} className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
