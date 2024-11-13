import React from "react";
import WebDesign from "../../assets/ServicesComponent/Icons/WebDesign.png";
import UIUX from "../../assets/ServicesComponent/Icons/UIUX.png";
import WebMigra from "../../assets/ServicesComponent/Icons/WebsiteMigration.png";
import AppDev from "../../assets/ServicesComponent/Icons/AppDev.png";
import HubSpot from "../../assets/ServicesComponent/Icons/HubSpot.png";
import Email from "../../assets/ServicesComponent/Icons/Email.png";

const ExpertiseSection = () => {
  const services = [
    {
      title: "Web Design / Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: WebDesign,
    },
    {
      title: "UI/UX Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: UIUX,
    },
    {
      title: "Website Migration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: WebMigra,
    },
    {
      title: "App Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: AppDev,
    },
    {
      title: "HubSpot Integration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: HubSpot,
    },
    {
      title: "Email Marketing",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout",
      icon: Email,
    },
  ];
  return (
    <section className="py-5">
      <div className="container text-center">
        <h5 className="text-red mb-2">\ Our Services \</h5>
        <h2 className="fw-bold mb-5 text-blue">Our Expertise</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="h-100 shadow-sm">
                <div className="text-start p-4 rounded h-full bg-grey card-cstm">
                  <div className="mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{ width: "60px", height: "60px" }}
                      className="border-0 p-2 shadow-sm rounded bg-white"
                    />
                  </div>
                  <h5 className="fw-bold text-blue">{service.title}</h5>
                  <div className="red-line my-3"></div>
                  <p className="">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;
 