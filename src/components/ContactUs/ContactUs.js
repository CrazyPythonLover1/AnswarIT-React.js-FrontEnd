import React from "react";
import "./ContactUs.scss";
import contactImg from "../../Image/contact-us.png";
import ContactForm from "./ContactForm";
import Locations from "./Locations/Locations";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import PrintIcon from "@material-ui/icons/Print";
import EmailIcon from "@material-ui/icons/Email";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="container-fluid ">
        <div className="row m-0">
          <div className="col col-lg-6 col-md-12">
            <h4 className="main-title"> CONTACT US </h4>
            <h5> Corporate Office </h5>
            <div className="address">
              <div>
                {" "}
                <b>
                  {" "}
                  <LocationOnIcon /> Address:{" "}
                </b>{" "}
                House 67, Madani Avenue, 100 Feet, Vatara, Gulshan, Dhaka,
                Bangladesh.
              </div>
              <div>
                {" "}
                <b>
                  {" "}
                  <PhoneIcon /> Phone:{" "}
                </b>{" "}
                +8801710504157, +8801890803803 (Consulting & Recruiting)
              </div>
              <div>
                {" "}
                <b>
                  {" "}
                  <EmailIcon /> Email:{" "}
                </b>{" "}
                theanswarit@gmail.com{" "}
              </div>
              <div>
                {" "}
                <b>
                  {" "}
                  <EmailIcon /> Email:{" "}
                </b>{" "}
                dotmailit@gmail.com{" "}
              </div>
              <div>
                {" "}
                <b>
                  {" "}
                  <EmailIcon /> Email:{" "}
                </b>{" "}
                info@dotmailit.com{" "}
              </div>
              <br />
              <img className="img-fluid" src={contactImg} alt="" />
            </div>
          </div>
          <div className="  col col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-sm-4 card">
            <div className="form-container">
              <b>
                {" "}
                We would like to be easily accessible and to be available to our
                customers, potential clients and prospective employees. Whenever
                necessary, you just need to complete the following form. You
                can, also, visit any of our offices listed below.{" "}
              </b>{" "}
              <br /> <br />
              <ContactForm />
            </div>
          </div>
        </div>
        <hr></hr>
        <h4 className="main-title"> USA LOCATIONS </h4>
        <div className="row ">
          <div className="col-md-6 mx-auto ">
            <Locations
              title={" New York Office "}
              address={
                " 40-20 39th Avenue, Suite #400 Long Island City, NY 11101 "
              }
              phone={" +1 855-562-7867 "}
              email={
                " theanswarit@gmail.com, dotmailit@gmail.com, info@dotmailit.com"
              }
            />
            {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
          </div>
          <div className="col-md-6">
            {/* <Locations title={" New York Office "} address={" 40-20 39th Avenue, Suite #400 Long Island City, NY 11101 "} phone={" +1 855-562-7867 "} fax={" +1 571-766-2629 "} email={" theanswarit@gmail.com, shownahmed6666@gmail.com"} /> */}
            {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
          </div>
        </div>
        <hr></hr>
        {/* <h4 className="main-title" > GLOBAL LOCATIONS </h4>
                <div className="row">
                    
                    <div className="col-md-6">
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" theanswarit@gmail.com "} />
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" theanswarit@gmail.com "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                    </div>
                    <div className="col-md-6">
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" theanswarit@gmail.com "} />
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" theanswarit@gmail.com "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
