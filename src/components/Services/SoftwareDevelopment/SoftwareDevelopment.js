import React from 'react';
import Sidebar from '../Services/Sidebar/Sidebar';

const SoftwareDevelopment = () => {
    return (
        <div className="services" style={{ maxWidth:"1300px", padding:" 40px 60px", margin:"0 auto"}}>
        <div className="row w-100 m-0">
          <div className="col-lg-4 col-md-5">
            <Sidebar></Sidebar>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="service-details" style={{ flex: 1, padding: "0px" }}>
            <div>
            <h4 className="title" > <strong> SOFTWARE DEVELOPMENT </strong>  </h4>
            <p> <em> <b> Your quick, customized, and successful solutions delivery  </b></em></p>
            <img className="img-fluid" src={require(`../../../Image/services/1.1.jpg`).default} alt=""/> <br/> <br/>
            <p> <b> Business Application: </b> Competitiveness in the global marketplace requires speed and agility at every level. Businesses must respond quickly to meet customer demand, improve speed to market, react swiftly to changing market conditions and constantly seek gains in productivity and profitability. A sophisticated business application platform is critical to achieving these objectives. Business Application development software to real-world problems requires leading technology and an expert team. Our professional programmers are developing all sorts of application software may need including games, educational software, office applications, internet software, utilities, text and graphics editors, communication software.</p>
            <p> <b> E-Commerce Solution: </b> Answar iT provides customized E-Commerce solutions for local and international clients. Today e-commerce has revolutionized the system of communication and commerce. It has brought dramatic transformation in the way the consumers purchase and consume the goods and services at the online auction sites. Answar iT has earned the reputation of being the best provider of internet and e-commerce solutions to a wide range of industries. Answar iT designs, develops and manages its client’s website and all these are done in a productive environment to ensure its client’s success. </p>
            <p> <b> MIS Solution: </b> Are you looking to make the most of your company's technology investment? Are you seeking progressive, profit-building ways to streamline your process? MIS Solutions can guide you to choose and implement the right technology for your business. Answar iT’s MIS Solutions integrate disparate business processes and improve productivity and efficiency within enterprises. Customized MIS solutions may include HR & Payroll Management, Customer Relationship Management, Sales Tracking System, Operations Management, Accounting Management, Asset Management, Projects Management and Admin portal etc. </p>
            <p> <b> Web Development: </b>  In today’s market website development plays a vital role for an organization. It is a onetime investment with huge returns. Web development solutions find its way in the implementation of business policies on the web by the use of data services. If you are looking for software consultant to develop your web application or website then Answar iT is the stoppage for you as it provides practical and reliable advises for your business. Answar iT is an expert in web development solutions. It provides services across the globe which is within the budget and is customer centric. </p>
            <p>  Answar iT web development focusing areas are:</p>
            <ul>
                <li> Web Application Development </li>
                <li> Web and Enterprise Portal Development </li>
                <li> Web Design and Development </li>
            </ul>
        </div>
              
            </div>
          </div>

        </div>
        
      </div>
        
    );
};

export default SoftwareDevelopment;