import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function NavBar() {
    let navigate = useNavigate();
    let location = useLocation();

    const goJoinUs = () => {
        navigate("/join-us");
    };
    let cssActive = "nav-item nav-link active";
    let cssInactive = "nav-item nav-link";

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
                 data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="mb-0 text-primary text-uppercase"><i className="fa fa-cut me-3"></i>Looky</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className={location.pathname==="/" ? cssActive:cssInactive}>Home</Link>
                        <Link to="/barber-shops" className={location.pathname==="/barber-shops" ? cssActive:cssInactive}>Barbers</Link>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="team.html" className="dropdown-item">Our Barber</a>
                                <a href="open.html" className="dropdown-item">Working Hours</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to="/sign-in" className="nav-item nav-link">Sign in</Link>
                    </div>
                    <button onClick={() => goJoinUs()} className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Join us<i
                        className="fa fa-arrow-right ms-3"></i></button>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;