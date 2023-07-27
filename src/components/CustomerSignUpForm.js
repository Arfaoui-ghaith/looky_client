import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {signUpAsCustomer} from "../services/authService";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import { Calendar } from 'primereact/calendar';

function CustomerSignUpForm() {
    let navigate = useNavigate();

    const [data, setData] = React.useState({gender: "Male"});
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

    const signUp = async() => {
        setLoading(true);
        const res = await signUpAsCustomer(data);
        if(res.name === 'AxiosError'){
            toast.error(res.response.data.message);
            console.log(res);
        }else{
            toast.success("Successfully Accessed");
            navigate('/sign-in');
        }
        setLoading(false);
    }


    let calendarStyle = {
        color: "#6C7293",
        background: "#000",
        width: "100%"
    }

    return (
        <React.Fragment>
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link to="/" className="">
                        <h3 className="text-primary"><i className="fa fa-cut me-2"></i>LOOKY</h3>
                    </Link>
                    <h3>Sign Up</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="form-floating me-1">
                        <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" onChange={(e)=>change("firstName",e.target.value)}/>
                        <label htmlFor="floatingText">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" onChange={(e)=>change("lastName",e.target.value)}/>
                        <label htmlFor="floatingText">Last Name</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com" onChange={(e)=>change("email",e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password" onChange={(e)=>change("password",e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <Calendar placeholder="Birth Date" style={calendarStyle} value={data.birthDate} onChange={(e) => change("birthDate",e.target.value)} showIcon />
                </div>

                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={()=>signUp()}>{
                    loading ? <BeatLoader color="#fff" size={10} /> : "Sign Up"
                }</button>

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