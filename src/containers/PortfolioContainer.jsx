import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";

const PortofolioContainer = () => {
   return (
        <>
            <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
            <OurWorkComponent />
            <BannerComponent />    
        </>
    )
}

export default PortofolioContainer;