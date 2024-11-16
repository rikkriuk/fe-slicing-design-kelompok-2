import React from "react";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FirstTestimonialPersonImage from "../../assets/testimonial-1.png";
import SecondTestimonialPersonImage from "../../assets/testimonial-2.png";
import Backtick from "../../assets/backtick.png";
import "./TestimonialStyles.css";
import TitlePageComponent from "../TitlePage/TitlePageComponent";

const testimonials = [
  {
    name: "Daria Linney",
    position: "CEO",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    image: SecondTestimonialPersonImage,
    backtickImage: Backtick,
  },
  {
    name: "Samual Karl",
    position: "CEO",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    image: FirstTestimonialPersonImage,
    backtickImage: Backtick,
  },
  {
    name: "Daria Linney",
    position: "CEO",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    image: SecondTestimonialPersonImage,
    backtickImage: Backtick,
  },
];

const TestimonialComponent = () => {
  return (
    <>
      <TitlePageComponent title={"From our Customers"} description={"Testimonials"} />
      <Swiper
        modules={[Pagination]}
        slidesPerView={2.4}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        initialSlide={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 60,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-content shadow-lg">
              <div className="d-flex justify-content-between align-items-center">
                <img src={testimonial.image} alt="" width={70} height={70} />
                <img src={testimonial.backtickImage} alt="" width={60} height={60} />
              </div>

              <div className="mt-5 d-flex flex-column justify-content-start align-items-start">
                <p className="text-start">{testimonial.text}</p>
                <div className="text-start mt-3">
                  <h5 className="text-main-color">{testimonial.name}</h5>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialComponent;
