import React from "react";

function BarberCard({image, name}) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s"
                 style={{"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src={`img/${image}`} alt=""/>
                            <div className="team-social">
                                <button className="btn btn-primary py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></button>
                            </div>
                    </div>
                    <div className="bg-secondary text-center p-4">
                        <h5 className="text-uppercase">{name}</h5>
                        <span className="text-primary">4.5 <i className="fa fa-star"></i></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BarberCard;