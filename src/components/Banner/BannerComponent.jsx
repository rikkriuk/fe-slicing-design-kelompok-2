import React from "react";
import "./BannerStyles.css";

const BannerComponent = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md-7 d-flex justify-content-center align-items-center text-center pd-custom-banner card bg-dark">
          <h3 className="text-white mb-4 mx-3">
            “Some of the History of Our Company is that we are Catching up
            through Video”
          </h3>
          <button className="btn-custom-banner">Get In Touch</button>
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  );
};

export default BannerComponent;
