import React from "react";
import {Link, useNavigate} from "react-router-dom";

import toast from 'react-hot-toast';
import {BeatLoader} from "react-spinners";
import { LoginSocialFacebook, LoginSocialGoogle, LoginSocialInstagram } from "reactjs-social-login";
import { useDispatch } from "react-redux";
import { useLoginAsCustomerMutation } from "../redux/slices/customerApiSlice";
import { setCredentials } from "../redux/slices/auth";

function CustomerSignInForm() {
    let navigate = useNavigate();

    const [data, setData] = React.useState({});

    const dispatch = useDispatch();
    const [loginAsCustomer, { isLoading, error }] = useLoginAsCustomerMutation();
    const [loginBySocialNetwork] = useLoginAsCustomerMutation();

    const change = (index,value) => {
        if(value === ""){
            let user = data;
            delete user[index];
            setData(user);
        }else {
            let user = {...data};
            user[index] = value;
            setData(user);
        }
    }

    const submitSignIn  = async (e) => {
        e.preventDefault();
        try {
            const res = await loginAsCustomer(data).unwrap();
            dispatch(setCredentials({...res}));
            toast.success("Successfully Accessed");
            navigate('/');
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    const signInBySocialNetwork  = async (d) => {
        try {
            const res = await loginBySocialNetwork(d).unwrap();
            dispatch(setCredentials({...res}));
            toast.success("Successfully Accessed");
            navigate('/');
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }


    return (
        <React.Fragment>
                <div className="d-flex align-items-center justify-content-between mb-1">
                    <Link to="/" className="">
                        <h3 className="text-primary"><i className="fa fa-cut me-2"></i>LOOKY</h3>
                    </Link>

                </div>
                <div className="form-floating mb-2">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com" onChange={(e)=>change("email",e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password" onChange={(e)=>change("password",e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <a href="">Forgot Password</a>
                </div>
                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={(e)=>submitSignIn(e)}>{
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Sign In"
                }</button>
                <div className="separator">OR</div>
                <div className="d-flex justify-content-center pt-1 m-n1 ">
                    <LoginSocialFacebook
                        appId={process.env.REACT_APP_FB_APP_ID || ''}
                        onResolve={(res)=>signInBySocialNetwork({email: res.data.email})}
                        onReject={(err) => toast.error("Try Again Later")}
                    >
                    <button className="btn btn-lg-square btn-dark text-primary m-1" ><i
                        className="fab fa-facebook-f"></i></button>
                    </LoginSocialFacebook>
                    <LoginSocialGoogle
                        client_id={process.env.REACT_APP_GG_APP_ID || ''}
                        scope="openid profile email"
                        discoveryDocs="claims_supported"
                        access_type="offline"
                        onResolve={(res)=>signInBySocialNetwork({email: res.data.email})}
                        onReject={(err) => toast.error("Try Again Later")}
                    >
                        <button className="btn btn-lg-square btn-dark text-primary m-1"><i
                            className="fab fa-google"></i></button>
                    </LoginSocialGoogle>
                    <LoginSocialInstagram
                        client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ''}
                        client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ''}
                        redirect_uri={''}
                        onResolve={(res)=>signInBySocialNetwork({email: res.data.email})}
                        onReject={(err) => toast.error("Try Again Later")}>
                    <button className="btn btn-lg-square btn-dark text-primary m-1"><i
                        className="fab fa-instagram"></i></button>
                    </LoginSocialInstagram>
                </div>
                <p className="text-center mb-0">Don't have an Account? <Link to="/sign-up/customer">Sign Up</Link></p>

        </React.Fragment>
    );
}

export default CustomerSignInForm;