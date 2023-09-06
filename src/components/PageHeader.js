import React from "react";

function PageHeader({title, image}) {
    return (
        <React.Fragment>
            <div className="container-fluid page-header py-5 mb-4 wow fadeIn" data-wow-delay="0.1s" style={{
                background: `linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)), ${image == null ? 'url(../img/carousel-1.jpg)' : ''} center center no-repeat`
            }}>
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PageHeader;