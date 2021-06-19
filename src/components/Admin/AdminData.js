import React from "react";
import "./Admin.css";

const AdminData = (props) => {
  const mainSection = { marginTop: "25px" };
  const { name, image, title, description, desc2 } = props.singleData;
  return (
    <section style={mainSection} className=" container-fluid w-100 mb-5">
      <div className="inner-section row">
        <div className="col-lg-4 col-md-12 img-container">
          <img className="img-fluid  img" src={image} alt="" />
        </div>
        <div className="col-md-12 col-lg-8">
          <h2 style={{ color: "#5c10e3" }} className="nameDesign">
            {name}
          </h2>
          <h5 style={{ margin: "1rem 0" }}>{title}</h5>
          <p style={{ lineHeight: "30px", textAlign: "justify" }}>
            {description}
          </p>

          <p style={{ lineHeight: "30px", textAlign: "justify" }}>{desc2}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminData;
