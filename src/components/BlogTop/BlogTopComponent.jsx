import React from "react";
import personTop from "../../assets/PersonBlogTop.jpeg";
import author from "../../assets/Author1.jpeg";
import "./BlogStyle.css";

const BlogTopComponent = () => {
  return (
    <section className="blog-top">
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-2">
            <div className="card">
              <div className="card-body">
                <img src={personTop} alt="" className="img-fluid" />
                <p className="mt-2 fw-bold text-secondary">May, 4th 2022</p>
                <h2 className="color-primary-blog">
                  The most Popular Business Of the Year
                </h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <div className="d-flex align-items-center">
                      <img
                        src={author}
                        alt="gambar author"
                        height="40"
                        width="40"
                        className="img-fluid rounded-circle me-2"
                      />
                      <p className="m-0 color-author-blog fw-bold">
                        Patricia Anderson
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">2 Min Read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="d-flex flex-column justify-content-between ">
              <div className="card mb-4 p-3 shadow">
                <div className="d-flex">
                  <img
                    src={personTop}
                    alt=""
                    height="185"
                    width="185"
                    className="rounded my-2 mx-3"
                  />
                  <div className="d-flex align-items-start flex-column flex-grow-1">
                    <div className="p-2">
                      <p className="m-0 fw-bold text-secondary">
                        Apr 27th, 2022
                      </p>
                    </div>
                    <div className="px-2">
                      <h3 className="color-primary-blog m-0">
                        The most Popular Business Of the Year
                      </h3>
                    </div>
                    <div className="mt-auto p-2">
                      <div className="d-flex align-items-center">
                        <img
                          src={author}
                          alt="gambar author"
                          height="40"
                          width="40"
                          className="img-fluid rounded-circle me-2"
                        />
                        <p className="m-0 color-author-blog fw-bold">
                          Patricia Anderson
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="card p-3 shadow">
                <div className="d-flex">
                  <img
                    src={personTop}
                    alt=""
                    height="185"
                    width="185"
                    className="rounded my-2 mx-3"
                  />
                  <div className="d-flex align-items-start flex-column flex-grow-1">
                    <div className="p-2">
                      <p className="m-0 fw-bold text-secondary">
                        Apr 27th, 2022
                      </p>
                    </div>
                    <div className="px-2">
                      <h3 className="color-primary-blog m-0">
                        The most Popular Business Of the Year
                      </h3>
                    </div>
                    <div className="mt-auto p-2">
                      <div className="d-flex align-items-center">
                        <img
                          src={author}
                          alt="gambar author"
                          height="40"
                          width="40"
                          className="img-fluid rounded-circle me-2"
                        />
                        <p className="m-0 color-author-blog fw-bold">
                          Elaine Luna
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTopComponent;
