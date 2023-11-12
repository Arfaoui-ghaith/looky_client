import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div
        className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Get In Touch</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-map-marker-alt text-primary" />
                </div>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-phone-alt text-primary" />
                </div>
                <span>+012 345 67890</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-envelope-open text-primary" />
                </div>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Quick Links</h4>
              <Link className="btn btn-link" to="">
                About Us
              </Link>
              <Link className="btn btn-link" to="">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="">
                Our Services
              </Link>
              <Link className="btn btn-link" to="">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="">
                Support
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Newsletter</h4>
              <div className="position-relative mb-4">
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
              <div className="d-flex pt-1 m-n1">
                <Link
                  className="btn btn-lg-square btn-dark text-primary m-1"
                  to=""
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    to=""
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    to=""
                >
                  <i className="fab fa-youtube" />
                </Link>
                <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    to=""
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" to="/">
                  LOOKY
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <Link className="border-bottom" to="https://htmlcodex.com">
                  HTML Codex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
