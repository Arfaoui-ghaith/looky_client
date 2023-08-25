import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

function Forbidden() {
    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title={"403 ERROR"} />
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
                            <h1 className="display-1">403</h1>
                            <h1 className="mb-4">Page Need Permission</h1>
                            <p className="mb-4">
                                We’re sorry, the page you have looked for need permission in our
                                website! Maybe go to our home page or try again later?
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

export default Forbidden;