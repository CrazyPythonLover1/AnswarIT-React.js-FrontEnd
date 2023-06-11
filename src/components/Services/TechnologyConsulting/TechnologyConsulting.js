import React from "react";
import Sidebar from "../Services/Sidebar/Sidebar";

const TechnologyConsulting = () => {
  return (
    <div
      className="services"
      style={{ maxWidth: "1300px", padding: " 40px 60px", margin: "0 auto" }}
    >
      <div className="row w-100 m-0">
        <div className="col-lg-4 col-md-5">
          <Sidebar></Sidebar>
        </div>

        <div className="col-lg-8 col-md-7">
          <div className="service-details" style={{ flex: 1, padding: "0px" }}>
          <div>
             <h4 className="title" > <strong> TECHNOLOGY CONSULTING </strong>  </h4>
            <p> <em> <b>Tech Solutions for smarter and faster growth</b> </em></p>
            <img className="img-fluid" src={require(`../../../Image/services/1.3.jpg`).default} alt=""/> <br/> <br/> 
            <p>Information technology has become one of the central and core element of strategy of any organization. It not only provides seamless integration between various organizational functions, supports day-to-day operations, helps to connect with customers, provides instantaneous reports on health and well-being of an organization but also provides competitive advantage to organization.<br/><br/>Our team of established professionals understands the importance of technology in today's dynamic business environment. Answar iT offers speciality firms a wide spectrum of services, fine-tuned to achieving higher performance, while accommodating specific client needs.</p>

            <h5 className="p-1"> How does opting for Answar iT's Technology Solutions benefit you? </h5>

            <p> <b> Experience and technology expertise:  </b> Answar iT has experienced and dedicated team of technology professionals who together with customers, have conceptualized, developed and maintained mission-critical technology solutions. Our team has worked on diverse technology platforms.</p>

            <p> <b> Engagement models:  </b> Answar iT is flexible in its engagement models with its customers. Answar iT engages with customers based upon specific customer and project requirements. Engagement models include:</p>

            <ul>
                <li> “Augmentation of project staff” in a specific project for short term duration. </li>
                <li> “Project execution” with end to end project execution responsibility of a project with Answar iT team. </li>
                <li> ”Managed services” with end to end business application responsibility with Answar iT team. </li>
            </ul>

            <h5 className="p-1">Technology Services Offered by Answar iT </h5>

            <p> Answar iT believes that only a well-planned and innovative approach can help deliver exceptional results. Therefore, to help you expand the scope of your technology planning and management operations, we have condensed years of expertise into the following end-to-end Solution Modules: </p>

            <p> <b> Technology Architecture and Design:  </b> Every business has a unique set of needs, which is why we take the time to understand and evaluate your specific requirements, in order to create the most robust and progressively flexible technology architecture for your organization. </p>

            <p> <b> Business Analysis:  </b>  Mere survival is not an option for today's business, it not only needs to keep up with its competition, but also stay one step ahead. For this, our business and domain experts bring you objective insight of latest trends, timely solutions and well-researched analytics to help make straightforward and unambiguous decisions for technology solutions. </p>

            <p> <b> Development and Implementation: </b> Rationale and practicality form the cornerstones of our solutions, making solution development and implementation a seamless process. For this, our highly talented team follows a disciplined approach to assemble technology solutions that meet robust, mission critical requirements. </p>

            <p> <b> Project Management:  </b>  We want you to focus on what you do best, which is why we have our project managers work in collaboration with your project sponsors to deliver results faster and more diligently. </p>

            <p> <b> Software Product implementation:  </b> Besides working on specific custom projects, we seamlessly customize and implement software product packages including ERP, Risk suite of application etc.</p>

            <p> <b> Research and Development:  </b> In addition to custom projects, product implementation, Answar iT experts can partner with you for new Software product or application development. If you have software solution idea in the form of product or application and want to kick start realization without building your own technology organization, Answar iT can as your Research and Development center. </p>

            <p> At Answar iT, we ensure to offer IT services that are tailor-made and feature unique methodologies to help you leapfrog competition, be it in the domain of banking, insurance, risk management, or other business domains. Our services are aimed at equipping you with cost effective, timely and flawless technology solutions that is in line with your organizational objectives with utmost respect for privacy, we not only ensure complete confidentiality, but also adhere to our client's data security policies. </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyConsulting;
