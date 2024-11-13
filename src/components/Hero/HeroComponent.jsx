import React from "react";
import "./HeroStyles.css";
import HeroImage from "../../assets/hero-image.png"

const HeroComponent = () => {
   return (
      <section className="container my-5">
         <div className="container row align-items-center gap-5 gap-lg-0">
            <div className="col-12 order-2 order-lg-2 md-6 col-md-12 col-lg-6">
               <h3 className="text-main-color fs-3 fs-md-5">\ We Are Here \</h3>
               <h2 className="h2-hero-custom my-4">Better Insights For <br /> Business Growth</h2>
               <button className="btn-view-more">View More</button>
            </div>

            <div className="col-12 order-1 order-lg-2 md-6 col-md-12 col-lg-6">
               <img src={HeroImage} alt="hero-image" className="img-fluid" />
            </div>
         </div>
      </section>
   )
}

export default HeroComponent;