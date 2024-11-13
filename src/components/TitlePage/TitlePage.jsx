import React from "react";
import "./TitlePageStyles.css";

const TitlePage = ({ title, description }) => {
  return (
    <div className="container-fluid bg-color-container-title">
      <div className="container">
        <div class="d-flex justify-content-center text-center pd-custom-title ">
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

export default TitlePage;
