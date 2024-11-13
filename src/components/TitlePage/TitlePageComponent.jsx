import React from "react";
import "./TitlePageStyles.css";

const TitlePageComponent = ({ title, description }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex justify-content-center text-center pd-custom-title ">
          <div>
            <h4 className="color-primary-title fw-bold">\ {title} \</h4>
            <h4 className="color-secondary-title fs-1 fw-bold">
              {description}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePageComponent;
