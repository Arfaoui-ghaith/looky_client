import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {signInAsBarber} from "../services/authService";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";

function BarberShopSignInForm() {
    let navigate = useNavigate();

    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);


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

    const signIn = async() => {
        setLoading(true);
        const res = await signInAsBarber(data);
        if(res.name === 'AxiosError'){
            toast.error(res.response.data.message);
            console.log(res);
        }else{
            toast.success("Successfully Accessed");
            navigate('/');
        }
        setLoading(false);
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
            <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={()=>signIn()}>{
                loading ? <BeatLoader color="#fff" size={10} /> : "Sign In"
            }</button>
            <p className="text-center mb-0">Don't have an Account? <Link to="/sign-up/barber">Sign Up</Link></p>
        </React.Fragment>
    );
}

export default BarberShopSignInForm;