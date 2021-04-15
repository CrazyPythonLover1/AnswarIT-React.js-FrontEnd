import React from 'react';
import Sidebar from '../Services/Sidebar/Sidebar';

const WhyAnswarIT = () => {
    return (
        <div className="services" style={{ maxWidth:"1300px", padding:" 40px 60px", margin:"0 auto"}}>
        <div className="row w-100 m-0">
          <div className="col-lg-4 col-md-5">
            <Sidebar></Sidebar>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="service-details" style={{ flex: 1, padding: "0px" }}>
            <div>
            <h4 className="title" > <strong> WHY ANSWARIT </strong> </h4>
            <p> <em> <b> Our expertise lies in: </b> </em></p>
            <img className="img-fluid" src={require(`../../../Image/services/1.7.jpg`).default} alt=""/> <br/> <br/> 
            <p>We go beyond SLA's in our approach to process outsourcing. With meticulous planning, use of state-of-the-art technology and support from a dedicated team of seasoned professionals, we ensure that our outsourcing partners always stay ahead of their competition. We not only take the time to understand your business process requirements, but also deliver maximum value by levering our knowledge of industry best practices and innovative solutions.<br/><br/>  </p>
        </div>
              
            </div>
          </div>

        </div>
        
      </div>
        
    );
};

export default WhyAnswarIT;