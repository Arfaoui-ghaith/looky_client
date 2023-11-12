import React from "react";
import Gallery from "./Gallery";

function AboutService({service}) {


    return (
        <React.Fragment>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <p className="d-inline-block bg-secondary text-primary py-1 px-4">Gallery</p>
                            <Gallery images={service?.gallery.length >0 ? service?.gallery : [{id: 1, image: 'https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg'}] }/>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="d-inline-block bg-secondary text-primary py-1 px-4">Details</p>
                            <h1 className="text-uppercase mb-4">{service?.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: service?.description}} />
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-1">{service?.price} TND</h3>
                                    <p className="mb-0">The cost of this service</p>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-1">{service?.duration} minutes</h3>
                                    <p className="mb-0">How much will take.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutService;