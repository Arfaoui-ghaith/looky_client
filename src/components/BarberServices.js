import React from "react";

function BarberServices({services}) {
    return (
        <React.Fragment>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s"
                             style={{"visibility": "visible", "animationDelay": "0.1s", "animationName": "fadeIn"}}>
                            <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                                <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Price &amp; Plan</p>
                                <h1 className="text-uppercase mb-4">Check Out Our Barber Services And Prices</h1>
                                <div>
                                    {
                                        services.map(service => (
                                            <div className="d-flex justify-content-between border-bottom py-2">
                                                <h6 className="text-uppercase mb-0">{service.title}</h6>
                                                <span className="text-uppercase text-primary">{service.price} TND</span>
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s"
                             style={{"visibility": "visible", "animationDelay": "0.5s", "animationName": "fadeIn"}}>
                            <div className="h-100">
                                <img className="img-fluid h-100" src="/img/price.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BarberServices;