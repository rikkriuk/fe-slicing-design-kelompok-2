import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";

const AboutContainer = () => {
  return (
    <div>
      <About title="About" subtitle="Home/About" />
      <AboutUS />
      <Card />
    </div>
  );
};

export default AboutContainer;
