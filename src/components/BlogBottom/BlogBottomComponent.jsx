import React from "react";
import "./BlogBottomStyle.css";
import FirstPerson from "../../assets/BlogsComponent/person-1.jpeg";
import SecondPerson from "../../assets/BlogsComponent/person-2.png";
import ThirdPerson from "../../assets/BlogsComponent/person-3.png";
import FirstImage from "../../assets/BlogsComponent/image-1.jpeg";
import SecondImage from "../../assets/BlogsComponent/image-2.png";
import ThirdImage from "../../assets/BlogsComponent/image-3.png";

const BlogBottomComponenet = () => {
  return (
    <div className="container-fluid blog-bottom me-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={FirstImage} alt="" className="img-fluid" />
                <p className="mt-1">May, 4th 2022</p>
                <h2 className="my-2">The most Popular Business Of the Year</h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <img
                      src={FirstPerson}
                      alt="gambar author"
                      className="img-fluid rounded-circle"
                    />
                    <p className="mt-2"> Ranold Jeff.</p>
                  </div>
                  <p className="mt-5">2 Min Read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-4">
              <div className="card-body">
                <img src={SecondImage} alt="" className="img-fluid" />
                <p className="mt-1">May, 4th 2022</p>
                <h2 className="my-2">The most Popular Business Of the Year</h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <img
                      src={SecondPerson}
                      alt="gambar author"
                      className="img-fluid rounded-circle"
                    />
                    <p className="mt-2 p-custom"> Ranold Jeff.</p>
                  </div>
                  <p className="mt-5 p-custom">2 Min Read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={ThirdImage} alt="" className="img-fluid" />
                <p className="mt-1">May, 4th 2022</p>
                <h2 className="my-2">The most Popular Business Of the Year</h2>
                <div className="d-flex justify-content-between align-items-center mt-3 rounded">
                  <div className="author">
                    <img
                      src={ThirdPerson}
                      alt="gambar author"
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
