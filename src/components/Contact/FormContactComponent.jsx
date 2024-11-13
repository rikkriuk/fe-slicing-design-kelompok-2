import React from "react";
import "./FormContactStyles.css";

const FormContactComponent = () => {
  return (
    <div className="container-fluid  bg-color-container-contact">
      <div className="container">
        <div className="row">
          <div className="col-md" />
          <form className="col-md-6 card p-4 mb-5 me-3">
            <div className="my-3">
              <input
                type="text"
                className="form-control bg-input-contact"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-input-contact"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-input-contact"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-input-contact"
                id="exampleFormControlTextarea1"
                rows="5"
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
