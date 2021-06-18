import React from 'react';

const CommingSoon = ({title}) => {
    return (
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "0px",
          padding: "50px",
          color: "#5c10e3",
          fontWeight: "bold",
          minHeight: "63vh"
        }}
      >
        <h2> {title} </h2>
        <h1> Comming Soon..........</h1>
      </div>
    );
};

export default CommingSoon;