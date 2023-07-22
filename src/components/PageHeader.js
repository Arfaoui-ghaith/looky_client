import React from "react";

function PageHeader({title}) {
    return (
        <React.Fragment>
            <div className="container-fluid page-header py-5 mb-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">{title}</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PageHeader;