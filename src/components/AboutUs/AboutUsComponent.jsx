import React from "react";
import "./AboutUsStyles.css";
import aboutUs from "../../assets/AboutUs.jpeg";

// Function for About us Component
const AboutUsComponent = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={aboutUs}
              alt="about-us"
              height="400"
              width="550"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h4>\ About us \</h4>
            <h1 className="fs-1 fs-sm-4 fs-md-5 fs-lg-6 my-3"> One of the Fastest Way to Business Growth</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
            <div className="card">
              <div className="card-body">
                <h5>
                  <i className="bi bi-person-fill i-cstm"></i>
                  Get Instant Professional Advice
                </h5>
                <p>
                  Ready to Help : <span>+1 356 678 7897</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
