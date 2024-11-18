import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaComponent from "../components/Meta/MetaComponent";

const PortofolioContainer = () => {
   return (
        <>
            <MetaComponent page={"portfolio"}/>
            <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
            <OurWorkComponent />
            <BannerComponent />    
        </>
    )
}

export default PortofolioContainer;