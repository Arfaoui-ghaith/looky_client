import React from "react";
import BarberCard from "./BarberCard";
import BarberTeamCard from "./BarberTeamCard";

function BarberShopTeam({image, name}) {
    return (
        <React.Fragment>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                         style={{"max-width": "600px", "visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                        <p className="d-inline-block bg-secondary text-primary py-1 px-4">Spotty Barbers</p>
                        <h1 className="text-uppercase">Meet Our Team</h1>
                    </div>
                    <div className="row g-4">
                        <BarberTeamCard/>
                        <BarberTeamCard/>
                        <BarberTeamCard/>
                        <BarberTeamCard/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BarberShopTeam;