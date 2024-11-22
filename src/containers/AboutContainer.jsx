import React, { useEffect, useState } from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaComponent from "../components/Meta/MetaComponent";
import { getTeams } from "../utils/api";

const AboutContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeams().then((res) => {
      setData(res.data.data);
    });
  }, [])
  return (
    <>
      <MetaComponent page={"about"}/>
      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...data, ...data]} />
      <BannerComponent />
    </>
  );
};

export default AboutContainer;
