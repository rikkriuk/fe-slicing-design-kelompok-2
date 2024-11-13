import React from "react";
import "./AboutStyles.css";

//function for about page
const AboutComponent = ({ title, subtitle }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default AboutComponent;
