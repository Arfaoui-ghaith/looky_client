import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { clearCredentials } from "../redux/slices/auth";

function NavBar() {
  let navigate = useNavigate();
  let location = useLocation();

  const dispatch = useDispatch();

  let cssActive = "nav-item nav-link active";
  let cssInactive = "nav-item nav-link";

  const logoutSubmit = () => {
    dispatch(clearCredentials());
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0 text-primary text-uppercase">
            <i className="fa fa-cut me-3" />
            Looky
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              to="/"
              className={location.pathname === "/" ? cssActive : cssInactive}
            >
              Home
            </Link>
            <Link
              to="/barber-shop/services"
              className={
                location.pathname === "/barber-shop/services"
                  ? cssActive
                  : cssInactive
              }
            >
              Services
            </Link>
            <Link
              to="/barber-shop/appointments"
              className={
                location.pathname === "/barber-shop/appointments"
                  ? cssActive
                  : cssInactive
              }
            >
              Appointments
            </Link>
            <Link
              to="/barber-shop/team"
              className={
                location.pathname === "/barber-shop/team"
                  ? cssActive
                  : cssInactive
              }
            >
              Team
            </Link>
            <Link
              to="/barber-shop/profile"
              className={
                location.pathname === "/barber-shop/profile"
                  ? cssActive
                  : cssInactive
              }
            >
              Profile
            </Link>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => logoutSubmit()}
              className="nav-item nav-link"
            >
              Sign out
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
