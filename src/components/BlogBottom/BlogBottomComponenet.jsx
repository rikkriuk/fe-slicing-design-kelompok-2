import React from "react";
import "./BlogBottomStyle.css";
import personTop from "../../assets/PersonBlogTop.jpeg";
import author from "../../assets/Author1.jpeg";

const BlogBottomComponenet = () => {
  return (
    <div className="blog-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  src={personTop}
                  alt=""
                  width="514"
                  height="300"
                  className="img-fluid"
                />
                <p>May, 4th 2022</p>
                <h2>The most Popular Business Of the Year</h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <img
                      src={author}
                      alt="gambar author"
                      height="40"
                      width="40"
                      className="img-fluid rounded-circle"
                    />
                    <p className="mt-2"> Ranold Jeff.</p>
                  </div>
                  <p className="mt-5">2 Min Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBottomComponenet;
