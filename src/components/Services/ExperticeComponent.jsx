import React from "react";

const ExpertiseSection = ({ services }) => {
  return (
    <section className="container-fluid">
      <div className="container text-center">
        <div className="row mt-2 mb-5">
          {services.map((service, index) => (
            <div className={`${services.length === 4 ? "col-md-3" : "col-md-4"} mb-4 position-relative`} key={index}>
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

                  {services.length === 4 && (
                    <div className="position-absolute top-0 end-0 p-4">
                      <h3 className="text-secondary fs-2">0{index + 1}</h3>
                    </div>
                  )}
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
 