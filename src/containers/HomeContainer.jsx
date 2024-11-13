import React from "react";
import HeroComponent from "../components/Hero/HeroComponent";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import HeroServiceSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import CardComponent from "../components/Card/CardComponent";
import { planingData, servicesData, leadersData } from "../utils/data";
import FormContactComponent from "../components/Contact/FormContactComponent";
import BannerComponent from "../components/Banner/BannerComponent";

const HomeContainer = () => {

   return (
        <>
            <HeroComponent />
            <AboutUsComponent />
            <TitlePageComponent title={"Planning"} description={"Our Work"} />
            <ExpertiseSection services={planingData}/>
            <HeroServiceSection />
            <TitlePageComponent title={"Services"} description={"Our Expertice"} />
            <ExpertiseSection services={servicesData}/>
            <CardComponent leadersData={leadersData}/>
            <div className="bg-color-container-contact">
                <TitlePageComponent title="Get In Touch" description="Hey! Lets Talk" />
                <FormContactComponent />
            </div>
            <BannerComponent />
        </>
    )
}

export default HomeContainer;