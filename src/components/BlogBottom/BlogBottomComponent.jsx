import React, { useEffect, useState } from "react";
import "./BlogBottomStyle.css";
import { getArticle } from "../../utils/api";
import { Link } from "react-router-dom";

const BlogBottomComponenet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticle().then((res) => {
      setData(res.data.data);
    });
  })

  return (
    <div className="container-fluid blog-bottom me-5">
      <div className="container">
        <div className="row align-items-center my-4 gap-3 gap-lg-0">

          {data?.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={item.imageUrl} alt="" className="img-fluid" />
                  <Link to={`${item.slug}`} className="my-4 fs-4 pe-md-5 text-decoration-none text-main-color">{item.title}</Link>
                  <div className="d-flex justify-content-between align-items-center mt-4 rounded">
                    <div className="author d-flex align-items-center gap-2">
                      <p className="fw-semibold fs-6">{item.writer}</p>
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
