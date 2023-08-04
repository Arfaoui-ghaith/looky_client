import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

function NotFound() {
    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title={"404 ERROR"} />
            <div
                className="container-xxl py-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp"
                }}
            >
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">
                                We’re sorry, the page you have looked for does not exist in our
                                website! Maybe go to our home page or try to use a search?
                            </p>
                            <Link className="btn btn-primary py-3 px-5" to="/">
                                Go Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default NotFound;