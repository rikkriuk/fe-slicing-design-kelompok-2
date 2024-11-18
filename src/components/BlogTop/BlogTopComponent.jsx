import React from "react";
import FirstPerson from "../../assets/BlogsComponent/person-1.jpeg";
import SecondPerson from "../../assets/BlogsComponent/person-2.png";
import ThirdPerson from "../../assets/BlogsComponent/person-3.png";
import FirstImage from "../../assets/BlogsComponent/image-1.jpeg";
import SecondImage from "../../assets/BlogsComponent/image-2.png";
import ThirdImage from "../../assets/BlogsComponent/image-3.png";
import "./BlogStyle.css";

const BlogTopComponent = () => {
  return (
    <section className="blog-top container-fluid">
      <div className="container my-4">
        <div className="row align-items-start gap-3 gap-lg-0">
          <div className="col-md-6 row-12 mb-2">
            <div className="card">
              <div className="card-body">
                <img src={FirstImage} alt="image" className="img-fluid" />
                <p className="mt-2 fw-bold text-secondary">May, 4th 2022</p>
                <h2 className="color-primary-blog fs-4 my-2 fs-5 fs-lg-4">
                  The most Popular Business Of the Year
                </h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <div className="d-flex align-items-center">
                      <img
                        src={FirstPerson}
                        alt="gambar author"
                        height="40"
                        width="40"
                        className="img-fluid rounded-circle me-2"
                      />
                      <p className="m-0 color-author-blog fw-bold">
                        Ranold Jeff.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 fw-semibold text-secondary">2 Min Read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 row-12 d-flex flex-column h-100 mb-2">
            <div className="card mb-4 p-3 shadow flex-grow-1">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={SecondImage}
                  alt=""
                  height="185"
                  width="185"
                  className="rounded my-2 mx-3 image-blog"
                />
                <div className="d-flex align-items-start justify-content-between flex-column flex-grow-1">
                  <div className="p-2">
                    <p className="m-0 fw-bold text-secondary">
                      Apr 27th, 2022
                    </p>
                  </div>
                  <div className="px-2">
                    <h3 className="color-primary-blog m-0 fs-4 my-2 fs-lg-2 me-5">
                      The most Popular Business Of the Year
                    </h3>
                  </div>
                  <div className="mt-auto px-2 pt-4 d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                      <img
                        src={SecondPerson}
                        alt="gambar author"
                        height="40"
                        width="40"
                        className="img-fluid rounded-circle me-2"
                      />
                      <p className="m-0 color-author-blog fw-bold">
                        Patricia Anderson
                      </p>
                    </div>
                    <p className="fw-semibold text-secondary m-0 p-0">2 Min Read</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-3 shadow flex-grow-1">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={ThirdImage}
                  alt=""
                  height="185"
                  width="185"
                  className="rounded my-2 mx-3 image-blog"
                />
                <div className="d-flex align-items-start flex-column flex-grow-1">
                  <div className="p-2">
                    <p className="m-0 fw-bold text-secondary">
                      Apr 27th, 2022
                    </p>
                  </div>
                  <div className="px-2">
                    <h3 className="color-primary-blog m-0 fs-4 my-2 fs-lg-2 me-5">
                      The most Popular Business Of the Year
                    </h3>
                  </div>
                  <div className="mt-auto px-2 pt-4 d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                      <img
                        src={ThirdPerson}
                        alt="gambar author"
                        height="40"
                        width="40"
                        className="img-fluid rounded-circle me-2"
                      />
                      <p className="m-0 color-author-blog fw-bold">
                        Elaina Luna
                      </p>
                    </div>
                    <p className="fw-semibold text-secondary m-0 p-0">2 Min Read</p>
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
