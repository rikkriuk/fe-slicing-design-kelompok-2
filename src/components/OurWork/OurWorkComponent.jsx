import React, { useState } from "react";
import "./OurWorkStyles.css";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import Image1 from "../../assets/OurWorkComponent/image-1.png";
import Image2 from "../../assets/OurWorkComponent/image-2.png";
import Image3 from "../../assets/OurWorkComponent/image-3.png";
import Image4 from "../../assets/OurWorkComponent/image-4.png";
import Image5 from "../../assets/OurWorkComponent/image-5.png";

const OurWorkComponent = () => {
   const [activeCategory, setActiveCategory] = useState("ALL");

   const images = [
      { src: Image1, category: "ALL", colSize: "col-md-8" },
      { src: Image2, category: "LIFE", colSize: "col-md-4" },
      { src: Image3, category: "NATURE", colSize: "col-md-3" },
      { src: Image4, category: "STORIES", colSize: "col-md-4" },
      { src: Image5, category: "TRAVEL", colSize: "col-md-5" },
   ];

   const handleCategoryChange = (category) => {
      setActiveCategory(category);
   };

   const filteredImages = activeCategory === "ALL"
      ? images
      : images.filter(image => image.category === activeCategory);

   return (
      <section className="container-fluid">
         <div className="container d-flex flex-column align-items-center">
            <TitlePageComponent title={"Portfolio"} description={"Our Work"} />
            <div>
               <button 
                  className={`btn-work-custom ${activeCategory === "ALL" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("ALL")}
               >
                  ALL
               </button>
               <button 
                  className={`btn-work-custom ${activeCategory === "LIFE" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("LIFE")}
               >
                  LIFE
               </button>
               <button 
                  className={`btn-work-custom ${activeCategory === "MOMENTS" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("MOMENTS")}
               >
                  MOMENTS
               </button>
               <button 
                  className={`btn-work-custom ${activeCategory === "NATURE" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("NATURE")}
               >
                  NATURE
               </button>
               <button 
                  className={`btn-work-custom ${activeCategory === "STORIES" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("STORIES")}
               >
                  STORIES
               </button>
               <button 
                  className={`btn-work-custom ${activeCategory === "TRAVEL" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("TRAVEL")}
               >
                  TRAVEL
               </button>
            </div>

            <div className="container mt-5">
               <div className="row g-4">
                  {filteredImages.map((image, index) => (
                     <div key={index} className={`${image.colSize} our-work-image-container overflow-hidden rounded`}>
                        <img src={image.src} className="img-fluid rounded" alt={`Portfolio Image ${index + 1}`} />
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-5">
               <button className="btn-get-in-touch">Get In Touch</button>
            </div>
         </div>
      </section>
   );
};

export default OurWorkComponent;
