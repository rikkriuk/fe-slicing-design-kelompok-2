import React from "react";

const ExpertiseSection = ({ services }) => {
  return (
    <section className="pe-5">
      <div className="container text-center">
        <div className="row mt-2 mb-5">
          {services.map((service, index) => (
            <div className={`${services.length === 4 ? "col-md-3" : "col-md-4"} mb-4`} key={index}>
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
 