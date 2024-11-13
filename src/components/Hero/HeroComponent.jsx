import React from "react";
import "./HeroStyles.css";
import HeroImage from "../../assets/hero-image.png"
import { Link } from "react-router-dom";

const HeroComponent = () => {
   return (
      <section className="container my-5">
         <div className="container row align-items-center gap-5 gap-lg-0">
            <div className="col-12 order-2 order-lg-2 md-6 col-md-12 col-lg-6">
               <h3 className="text-main-color fs-3 fs-md-5">\ We Are Here \</h3>
               <h2 className="h2-hero-custom mb-5 mt-3">Better Insights For <br /> Business Growth</h2>
               <Link to={"/about"} className="btn-view-more text-decoration-none">View More</Link>
            </div>

            <div className="col-12 order-1 order-lg-2 md-6 col-md-12 col-lg-6">
               <img src={HeroImage} alt="hero-image" className="img-fluid" />
            </div>
         </div>
      </section>
   )
}

export default HeroComponent;