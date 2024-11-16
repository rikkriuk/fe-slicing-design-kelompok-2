import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import { leadersData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaComponent from "../components/Meta/MetaComponent";

const AboutContainer = () => {
  return (
    <>
      <MetaComponent page={"about"}/>
      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...leadersData, ...leadersData]} />
      <BannerComponent />
    </>
  );
};

export default AboutContainer;
