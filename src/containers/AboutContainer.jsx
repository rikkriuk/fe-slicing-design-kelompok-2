import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import BannerComponent from "../components/Banner/BannerComponent";

const AboutContainer = () => {
  return (
    <div>
      <About title="About" subtitle="Home/About" />
      <AboutUS />
      <Card />
      <BannerComponent />
    </div>
  );
};

export default AboutContainer;
