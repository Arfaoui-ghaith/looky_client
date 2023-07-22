import React from "react";

function FeedBacks() {
    return (
        <React.Fragment>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                         style={{"max-width": "600px", "visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>
                        <p className="d-inline-block bg-secondary text-primary py-1 px-4">Testimonial</p>
                        <h1 className="text-uppercase">What Our Clients Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp owl-loaded owl-drag"
                         data-wow-delay="0.1s"
                         style={{"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInUp"}}>


                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                 style={{"transform": "translate3d(-1400px, 0px, 0px)", "transition": "all 1s ease 0s", "width": "4900px"}}>
                                <div className="owl-item cloned" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{"width": "700px"}}>
                                    <div className="testimonial-item text-center"
                                         data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>">
                                        <h4 className="text-uppercase">Client Name</h4>
                                        <p className="text-primary">Profession</p>
                                        <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <div className="owl-prev">prev</div>
                            <div className="owl-next">next</div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot active"><img className="img-fluid" src="img/testimonial-1.jpg"
                                                                 alt=""/></div>
                            <div className="owl-dot"><img className="img-fluid" src="img/testimonial-2.jpg" alt=""/>
                            </div>
                            <div className="owl-dot"><img className="img-fluid" src="img/testimonial-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeedBacks;