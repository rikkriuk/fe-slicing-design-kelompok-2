import React from "react";
import person from "../../assets/Person1.jpeg";
import person2 from "../../assets/Person2.png";
import person3 from "../../assets/Person3.jpeg";
import person4 from "../../assets/Person4.jpeg";
import "./CardStyles.css";

const CardComponent = () => {
  // data for Card Component
  const data = [
    { name: "Larry F. Burnett", jabatan: "CEO", image: person },
    { name: "Meghan J. Webb", jabatan: "CTO", image: person2 },
    { name: "Yvonne J. Cullum", jabatan: "COO", image: person3 },
    { name: "Diana H. Williams", jabatan: "CEO", image: person4 },
    { name: "Larry F. Burnett", jabatan: "CEO", image: person },
    { name: "Meghan J. Webb", jabatan: "CTO", image: person2 },
    { name: "Yvonne J. Cullum", jabatan: "COO", image: person3 },
    { name: "Diana H. Williams", jabatan: "CEO", image: person4 },
  ];
  return (
    // section card for About Component
    <section className="section-card container">
      <h4>\Team\</h4>
      <h1>Our Team</h1>
      <div className="row">
        {data &&
          data.map((item, index) => (
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
