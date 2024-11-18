import React, { useEffect, useState } from "react";
import "./ServiceStyles.css";
import lamp from "../../assets/ServicesComponent/Icons/lamp.png";
import star from "../../assets/ServicesComponent/Icons/star.png";
import { Link } from "react-router-dom";
import { getWhatWeDo } from "../../utils/api";

const HeroSection = ({ page }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWhatWeDo().then((res) => {
      setData(res.data.data[0]);
    });
  }, []);

  return (
    <>
      <div className="container-fluid py-5 bg-grey">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image Section */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={data?.imageUrl} // Replace with your image path
                alt="Team Working"
                className="img-fluid rounded image-hero-service"
              />
            </div>

            {/* Right Text Section */}
            <div className="col-lg-6">
              <h5 className="text-red fw-bold fs-3 mb-2">\ What We Do \</h5>
              <h2 className="my-4 fw-semibold fs-1 fs-sm-4 fs-md-5 fs-lg-6 text-blue mb-3">
                {data?.title}
              </h2>
              <p>
                {data?.desc}
              </p>

              {/* Vision and Goal Cards */}
              <div className="d-flex justify-content-between flex-column flex-md-row gap-3 mt-4">
                <div className="me-2 d-flex flex-column flex-lg-row gap-3">
                  <div className="goal-card d-flex align-items-center p-3 shadow-sm rounded mb-lg-0 mb-4">
                    {/* Icon Section */}
                    <div className="icon-container me-3">
                      <div className="icon-bg d-flex justify-content-center align-items-center rounded">
                        <img
                          src={lamp} // Replace with your icon path
                          alt="Goal Icon"
                          className="icon-img"
                        />
                      </div>
                    </div>
                    {/* Text Section */}
                    <div>
                      <h5 className="text-red fw-bold mb-1">Our Vision</h5>
                      <p className="text-dark mb-0">
                        It is a long established fact that
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex ms-lg-2 align-items-center">
                  <div className="goal-card d-flex align-items-center p-3 shadow-sm rounded">
                    {/* Icon Section */}
                    <div className="icon-container me-3">
                      <div className="icon-bg d-flex justify-content-center align-items-center rounded">
                        <img
                          src={star}
                          alt="Goal Icon"
                          className="icon-img"
                        />
                      </div>
                    </div>
                    {/* Text Section */}
                    <div>
                      <h5 className="text-red fw-bold mb-1">Our Goal</h5>
                      <p className="text-dark mb-0">
                        It is a long established fact that
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {page === "home" && (
                <div className="my-5">
                  <Link to={"/our-services"} className="btn-view-more text-decoration-none">View More</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
