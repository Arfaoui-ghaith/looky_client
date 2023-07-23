import React from "react";
import {Link} from "react-router-dom";

function CustomerSignUpForm() {
    return (
        <React.Fragment>
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link to="/" className="">
                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>LOOKY</h3>
                    </Link>
                    <h3>Sign Up</h3>
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
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios"
                                   id="gridRadios1" value="option1"/>
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios"
                                   id="gridRadios2" value="option2"/>
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Female
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>

                <div className="separator">OR</div>
                <div className="d-flex justify-content-center pt-1 m-n1">
                    <a className="btn btn-lg-square btn-dark text-primary m-1" href=""><i
                        className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg-square btn-dark text-primary m-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg-square btn-dark text-primary m-1" href=""><i
                        className="fab fa-youtube"></i></a>
                    <a className="btn btn-lg-square btn-dark text-primary m-1" href=""><i
                        className="fab fa-linkedin-in"></i></a>
                </div>
                <p className="text-center mt-3">Already have an Account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </React.Fragment>
    );
}

export default CustomerSignUpForm;