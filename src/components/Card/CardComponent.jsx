import React from "react";
import "./CardStyles.css";
import TitlePageComponent from "../TitlePage/TitlePageComponent";

const CardComponent = ({ leadersData }) => {
  return (
    // section card for About Component
    <section className="section-card container mb-5">
      <TitlePageComponent title={"Team"} description={"Our Leaders"} />
      <div className="row">
        {leadersData &&
          leadersData.map((item, index) => (
            <div className="col-md-3 mx-0 px-0 my-2" key={index}>
              <div className="card container">
                <div className="card-body px-0 py-1">
                  <img
                    src={item.image}
                    alt="person"
                    className="img-fluid rounded"
                    height="300"
                    width="263"
                  />
                  <h6>{item.name}</h6>
                  <p>{item.jabatan}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CardComponent;
