import React from "react";
import "./BlogBottomStyle.css";
import { blogsData } from "../../utils/data";

const BlogBottomComponenet = () => {
  return (
    <div className="container-fluid blog-bottom me-5">
      <div className="container">
        <div className="row align-items-center my-4 gap-3 gap-lg-0">

          {blogsData?.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={item.image} alt="" className="img-fluid" />
                  <h2 className="my-4 fs-4 pe-md-5">{item.title}</h2>
                  <div className="d-flex justify-content-between align-items-center mt-4 rounded">
                    <div className="author d-flex align-items-center gap-2">
                      <img
                        src={item.authorImage}
                        alt={item.authorName}
                        className="img-fluid rounded-circle"
                      />
                      <p className="fw-semibold fs-6">{item.authorName}</p>
                    </div>
                    <p className="text-secondary fw-semibold">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBottomComponenet;
