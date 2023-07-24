import React from "react";
import {Link} from "react-router-dom";
import ImageUploader from "./ImageUploader";

function BarberShopSignUpForm() {
    return (
        <React.Fragment>
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="">
                        <h3 className="text-primary"><i className="fa fa-cut me-2"></i>LOOKY</h3>
                    </Link>
                    <h3>Sign Up</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <ImageUploader/>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="form-floating me-1">
                        <input type="text" className="form-control" id="floatingText" placeholder="jhondoe"/>
                        <label htmlFor="floatingText">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingText" placeholder="jhondoe"/>
                        <label htmlFor="floatingText">Last Name</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                <p className="text-center mt-3">Already have an Account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </React.Fragment>
    );
}

export default BarberShopSignUpForm;