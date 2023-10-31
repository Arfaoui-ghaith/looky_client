import React from "react";
import CustomerSignUpForm from "../../components/CustomerSignUpForm";

function CustomerSignUp() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row h-100 align-items-center justify-content-center" style={{"min-height": "100vh"}}>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5">
                        <CustomerSignUpForm/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CustomerSignUp;