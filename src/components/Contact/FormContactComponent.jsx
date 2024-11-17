import React, { useState } from "react";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import "./FormContactStyles.css";
import axios from "axios";
import DOMPurify from "dompurify";

const FormContactComponent = ({ page }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    const sanitizedValue = DOMPurify.sanitize(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}api/contact`;
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, formData);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`container-fluid ${
        page === "home" ? "bg-contact-second" : "bg-color-container-contact"
      }`}
    >
      <TitlePageComponent
        title="Get In Touch"
        description="Hey! Lets Talk"
        page={page}
      />

      <div className="container">
        <div className="row">
          <div className="col-md" />
          <form onSubmit={handleSubmit} className="col-md-8 card p-4 mb-5 me-3">
            <div className="my-3">
              <input
                type="text"
                className="form-control bg-input-contact py-2"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
                value={formData.name}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-input-contact py-2"
                id="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-input-contact py-2"
                id="phone"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-input-contact py-2"
                id="exampleFormControlTextarea1"
                rows="5"
                value={formData.message}
                name="message"
                onChange={handleChange}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn-custom-contact">
              Send Now
            </button>
          </form>
          <div className="col-md-3 card p-4 mb-5">
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-telephone-inbound-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact ">
                      Call Anytime
                    </p>
                    <p>
                      + 91 23678 27867 <br /> + 91 67678 92878
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-envelope-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Send Email
                    </p>
                    <p>
                      connect@itfirms.com <br />
                      hello@itfirms.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-geo-alt-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Visit Us
                    </p>
                    <p>
                      20 Island Park Road, <br />
                      New Jearsy, New York,
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="fw-bold text-center mb-3">Follows Us</h5>
              <div className="d-flex flex-row mb-3 justify-content-center text-white">
                <i className="border bg-primary-contact icon-contact rounded bi bi-linkedin fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-instagram fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-facebook fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-twitter fs-4 me-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </div>
    </div>
  );
};

export default FormContactComponent;
