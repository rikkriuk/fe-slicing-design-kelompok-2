import React from "react";
import "./HeaderPageStyles.css";

const HeaderPageComponent = ({ page }) => {
  return (
    <div className="container-fluid bg-header-page">
      <div className="container ">
        <div class="d-flex justify-content-center text-center pd-custom-page">
          <div>
            <h1 className="color-primary-header fw-bold">{page}</h1>
            <h3 className="text-white">Home / {page}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPageComponent;
