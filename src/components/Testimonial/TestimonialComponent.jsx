import React, { useEffect, useState } from "react";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Backtick from "../../assets/backtick.png";
import "./TestimonialStyles.css";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import { getTestimonial } from "../../utils/api";

const TestimonialComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTestimonial().then((res) => {
      setData(res.data.data);
    });
  }, [])
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
        {data.map((item, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-content shadow-lg">
              <div className="d-flex justify-content-between align-items-center">
                <img src={item?.imageUrl} alt="image-testimoni" className="rounded" width={70} height={70} />
                <img src={Backtick} alt="backtick" width={60} height={60} />
              </div>

              <div className="mt-5 d-flex flex-column justify-content-start align-items-start">
                <h5 className="text-start">{item?.title}</h5>
                <p className="text-start">{item?.message}</p>
                <div className="text-start mt-3">
                  <h5 className="text-main-color">{item?.name}</h5>
                  <p>{item?.date}</p>
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
