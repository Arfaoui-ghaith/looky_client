import React from "react";
import BarberCard from "./BarberCard";

function BarberTeamCard({image, name}) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s"
                 style={{"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src="/img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
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