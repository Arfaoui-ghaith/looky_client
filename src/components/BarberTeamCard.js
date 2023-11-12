import React from "react";
import { Link } from "react-router-dom";

function BarberTeamCard() {
  return (
    <React.Fragment>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div className="team-item">
          <div className="team-img position-relative overflow-hidden">
            <img className="img-fluid" src="/img/team-1.jpg" alt="" />
            <div className="team-social">
              <Link className="btn btn-square" to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-square" to="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-square" to="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="bg-secondary text-center p-4">
            <h5 className="text-uppercase">Barber Name</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BarberTeamCard;
