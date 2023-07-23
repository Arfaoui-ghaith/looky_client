import React from "react";
import { Link } from "react-router-dom";

function JoinUs() {
    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="row h-100 align-items-center justify-content-center" style={{"min-height": "100vh"}}>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-7">
                        <h1 style={{"text-align": "center"}}><span className="text-primary">Join</span> as a customer or barber shop</h1>
                        <div className="d-flex align-items-center justify-content-around ">
                            <div className="col-lg-6 col-md-5 wow fadeInUp m-2" data-wow-delay="0.1s"
                                 style={{"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                                <div
                                    className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                    <div
                                        className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                                        style={{"width": "60px", "height": "60px"}}>
                                        <img className="img-fluid" src="img/customer.svg" alt=""/>
                                    </div>
                                    <div className="ps-4">
                                        <h3 className="text-uppercase mb-3">Customer</h3>
                                        <p>I’m a client, searching a new look.</p>

                                    </div>
                                    <Link to="/sign-up/customer" className="btn btn-square rounded-0"><i
                                        className="fa fa-arrow-right text-primary"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 wow fadeInUp m-2" data-wow-delay="0.1s"
                                 style={{"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                                <div
                                    className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                    <div
                                        className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                                        style={{"width": "60px", "height": "60px"}}>
                                        <img className="img-fluid" src="img/barber.svg" alt=""/>
                                    </div>
                                    <div className="ps-4">
                                        <h3 className="text-uppercase mb-3">Barber Shop</h3>
                                        <p>I’m a barber shop, looking for work.</p>

                                    </div>
                                    <Link to="/sign-up/barber" className="btn btn-square rounded-0"><i
                                        className="fa fa-arrow-right text-primary"></i></Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className="btn btn-primary py-3 w-100 mb-4">Back To Home</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default JoinUs;