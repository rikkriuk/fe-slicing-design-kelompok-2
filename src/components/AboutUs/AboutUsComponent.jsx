import React, { useEffect, useState } from "react";
import "./AboutUsStyles.css";
import { getAboutUs } from "../../utils/api";

// Function for About us Component
const AboutUsComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getAboutUs().then((res) => {
      setData(res.data.data);
    });
  }, [])

  return (
    <section className="about-section container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={data?.imageUrl}
              alt="about-us"
              height="400"
              width="550"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h4>\ About us \</h4>
            <h1 className="fs-1 fs-sm-4 fs-md-5 fs-lg-6 my-3">{data?.title}</h1>
            <p>
              {data?.desc}
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
