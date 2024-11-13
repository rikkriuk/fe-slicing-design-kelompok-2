import React from "react";
import "../components/Contact/FormContactStyles.css";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import FormContactComponent from "../components/Contact/FormContactComponent";

const ContactContainer = () => {
  return (
    <>
      <AboutComponent title="Contact" subtitle="Home / Contact" />
      <div className="bg-color-container-contact">
        <TitlePageComponent title="Get In Touch" description="Hey! Lets Talk" />
        <FormContactComponent />
      </div>
      <BannerComponent />
    </>
  );
};

export default ContactContainer;
