import React from "react";
import HeroSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import { servicesData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import AboutComponent from "../components/About/AboutComponent";

const ServicesContainer = () => {
  return (
    <>
      <AboutComponent title={"Services"} subtitle={"Home / Services"} />
      <HeroSection />
      <TitlePageComponent title="Our Services" description="Our Expertise" />
      <ExpertiseSection services={servicesData} />
      <BannerComponent />
    </>
  );
};

export default ServicesContainer;
