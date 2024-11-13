import React from "react";
import "./OurWorkStyles.css";
import Image1 from "../../assets/OurWorkComponent/image-1.png";
import Image2 from "../../assets/OurWorkComponent/image-2.png";
import Image3 from "../../assets/OurWorkComponent/image-3.png";
import Image4 from "../../assets/OurWorkComponent/image-4.png";
import Image5 from "../../assets/OurWorkComponent/image-5.png";

const OurWorkComponent = () => {
   return (
      <section className="container-fluid py-5">
         <div className="container d-flex flex-column align-items-center">
            <div>
               <button className="btn-work-custom active">ALL</button>
               <button className="btn-work-custom">LIFE</button>
               <button className="btn-work-custom">MOMENTS</button>
               <button className="btn-work-custom">NATURE</button>
               <button className="btn-work-custom">STORIES</button>
               <button className="btn-work-custom">TRAVEL</button>
            </div>

            <div className="container mt-5">
               <div className="row g-4">
                  <div className="col-md-8 our-work-image-container overflow-hidden rounded">
                     <img src={Image1} className="img-fluid rounded" alt="Top Left Image"/>
                  </div>
                  <div className="col-md-4 our-work-image-container overflow-hidden rounded">
                     <img src={Image2} className="img-fluid rounded" alt="Top Right Image"/>
                  </div>
                  <div className="col-md-3 our-work-image-container overflow-hidden rounded">
                     <img src={Image3} className="img-fluid rounded" alt="Bottom Left Image"/>
                  </div>
                  <div className="col-md-4 our-work-image-container overflow-hidden rounded">
                     <img src={Image4} className="img-fluid rounded" alt="Bottom Center Image"/>
                  </div>
                  <div className="col-md-5 our-work-image-container overflow-hidden rounded">
                     <img src={Image5} className="img-fluid rounded" alt="Bottom Right Image"/>
                  </div>
               </div>
            </div>

            <div className="mt-5">
               <button className="btn-get-in-touch">Get In Touch</button>
            </div>
         </div>
      </section>
   )
}

export default OurWorkComponent;