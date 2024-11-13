import React from "react";
import HeroSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";

const ServicesContainer = () => {
  return (
    <>
      <AboutComponent title={"Services"} subtitle={"Home / Services"} />
      <HeroSection />
      <ExpertiseSection />
      <BannerComponent />
    </>
  );
};

export default ServicesContainer;
