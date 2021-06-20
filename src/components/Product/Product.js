import React from "react";

const Product = () => {
  return (
    <div
      style={{
        margin: "auto",
        // textAlign: "center",
        marginTop: "0px",
        marginBottom: "0px",
        padding: "50px",
        fontWeight: "bold",
        minHeight: "63vh",
      }}
    >
      <h4 className="title" style={{ textAlign: "justify" }}>
        <strong>
          আমরা ল্যাপটপ সহ কম্পিউটারের যাবতীয় মালামাল আমাদানী করি এবং ন্যায্য
          মুল্যে শুধুমাত্র ছাত্র/ছাত্রী/গৃহিনীদের নিকট বিক্রয় করে থাকি।
          <br />
          <br />
          যোগাযোগঃ 01710504157
        </strong>{" "}
      </h4>
    </div>
  );
};

export default Product;
