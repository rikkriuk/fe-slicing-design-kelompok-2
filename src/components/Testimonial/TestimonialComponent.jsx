import React from "react";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import FirstTestimonialPersonImage from "../../assets/testimonial-1.png";
import SecondTestimonialPersonImage from "../../assets/testimonial-2.png";
import Backtick from "../../assets/backtick.png";
import "./TestimonialStyles.css";

const TestimonialComponent = () => {
  return (
    <section className="container-fluid py-5">
      <TitlePageComponent title="From our Customer" description="Testimonial" />
      <div className="justify-content-center">
        <div className="row overflow-hidden">
          <div className="bg-testimonial first col-md-4 col-sm-12 mb-4 p-4 position-relative">
            <img
              src={Backtick}
              alt="backtick"
              height="55"
              width="55"
              className="position-absolute top-0 end-0 m-3"
            />
            <img
              src={SecondTestimonialPersonImage}
              alt="testimonial-person"
              className="rounded-circle"
              height="60"
              width="60"
            />
            <p className="testimonial-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <h5 className="testimonial-color mt-3">Daria Linney</h5>
            <p className="fw-semibold">CEO</p>
          </div>

          <div className="bg-testimonial middle col-md-4 col-sm-12 mb-4 p-4 position-relative">
            <img
              src={Backtick}
              alt="backtick"
              height="55"
              width="55"
              className="position-absolute top-0 end-0 m-3"
            />
            <img
              src={FirstTestimonialPersonImage}
              alt="testimonial-person"
              className="rounded-circle"
              height="60"
              width="60"
            />
            <p className="testimonial-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <h5 className="testimonial-color mt-3">Samual Karl</h5>
            <p className="fw-semibold">CEO</p>
          </div>

          <div className="bg-testimonial last col-md-4 col-sm-12 mb-4 p-4 position-relative">
            <img
              src={Backtick}
              alt="backtick"
              height="55"
              width="55"
              className="position-absolute top-0 end-0 m-3"
            />
            <img
              src={SecondTestimonialPersonImage}
              alt="testimonial-person"
              className="rounded-circle"
              height="60"
              width="60"
            />
            <p className="testimonial-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <h5 className="testimonial-color mt-3">Daria Linney</h5>
            <p className="fw-semibold">CEO</p>
          </div>
        </div>

        <div className="d-flex gap-3 overflow-hidden justify-content-center mt-5">
            <i>
               <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="10" cy="10" r="9.5" stroke="#FF3E54"/>
               </svg>
            </i>

            <i>
               <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="10" cy="10" r="10" fill="#FF3E54"/>
               </svg>
            </i>

            <i>
               <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="10" cy="10" r="9.5" stroke="#FF3E54"/>
               </svg>
            </i>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
