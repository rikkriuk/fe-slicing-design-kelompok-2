import React from "react";
import "./TitlePageStyles.css";

const TitlePageComponent = ({ title, description, page }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex justify-content-center text-center pd-custom-title ">
          <div>
            <h4 className="color-primary-title fw-bold">\ {title} \</h4>
            <h4 className={`fs-1 fw-bold ${page ? "text-white" : "color-secondary-title"}`}>
              {description}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePageComponent;
