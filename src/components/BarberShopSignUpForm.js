import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ImageUploader from "./ImageUploader";
import {signUpAsBarber} from "../services/authService";
import {updateBarberLogo} from "../services/barberShopService";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";

function BarberShopSignUpForm() {
    let navigate = useNavigate();

    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [file, setFile] = React.useState(new FormData());


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
        if(file.has("image")) {
            const res = await signUpAsBarber(data);
            if (res.name === 'AxiosError') {
                toast.error(res.response.data.message);
                console.log(res);
            } else {
                toast.success("Successfully Accessed");

                const r = await updateBarberLogo(file);
                navigate('/sign-in');
            }
            console.log(data, file);
            setLoading(false);
        }else {
            toast.error("Logo is Missed");
            setLoading(false);

        }
    }

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
                    <ImageUploader onChange={file => setFile(file)}/>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com" onChange={(e)=>change("name",e.target.value)}/>
                    <label htmlFor="floatingInput">Barber Shop Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com" onChange={(e)=>change("email",e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password" onChange={(e)=>change("password",e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={()=>signUp()}>{
                    loading ? <BeatLoader color="#fff" size={10} /> : "Sign Up"
                }</button>
                <p className="text-center mt-3">Already have an Account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </React.Fragment>
    );
}

export default BarberShopSignUpForm;