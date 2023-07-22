import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import BarberCard from "../components/BarberCard";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

function BarberShops() {
    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Our Barber Shops"/>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-3 wow fadeInUp" data-wow-delay="0.1s"
                         style={{"max-width": "600px"}}>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-12">
                            <div className="bg-secondary rounded p-4 p-sm-5 mx-3">
                                <div className="position-relative mb-4">
                                    <input
                                    className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Search"/>
                                    <button type="button"
                                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <BarberCard image="barber1.png" name="Brass Knugkles"/>
                        <BarberCard image="barber2.jpeg" name="Baylee"/>
                        <BarberCard image="barber3.jpeg" name="Bayou Blades"/>
                        <BarberCard image="barber4.jpeg" name="Pottsy"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default BarberShops;