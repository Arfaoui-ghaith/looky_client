import React from "react";

function Carousel() {
  const img1 = "img/carousel-1.jpg"
  const img2 = "img/carousel-2.jpg"
  return (
    <React.Fragment>
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img className="w-100" src={img1} alt="Image"/>
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                    We Will Keep You An Awesome Look
                  </h1>
                  <button className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">
                    Get Started
                    <i className="fa fa-arrow-right ms-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img className="w-100" src={img2} alt="Image" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                    Luxury Haircut at Affordable Price
                  </h1>
                  <button className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">
                    Get Started
                    <i className="fa fa-arrow-right ms-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Carousel;
