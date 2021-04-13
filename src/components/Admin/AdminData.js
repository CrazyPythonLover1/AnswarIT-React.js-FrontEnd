import React from "react";
import "./Admin.css";

const AdminData = (props) => {
  const mainSection = { marginTop: "25px" };
  const { name, image, title, description, desc2 } = props.singleData;
  return (
    <section style={mainSection} className=" container-fluid w-100">
        <div className="inner-section row">
            <div className="col-md-4 img-container">
                <img className="img-fluid w-100 img" src={image} alt="" />
            </div>
        <div className="col-md-8">
            <h2
            style={{ color: "#5c10e3", lineHeight: "17px" }}
            className="nameDesign"
            >
            {name}
            </h2>
            <h5 style={{ margin:"1rem 0"}}>{title}</h5>
            <p style={{ lineHeight: "30px" }}>
                {description}
            </p>

            <p style={{ lineHeight: "30px" }}>
                {desc2}
            </p>
        </div>
        </div>
      
    </section>
  );
};

export default AdminData;