import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";

const PortofolioContainer = () => {
   return (
        <>
            <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
            <OurWorkComponent />
        </>
    )
}

export default PortofolioContainer;