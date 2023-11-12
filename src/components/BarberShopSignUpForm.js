import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ImageUploader from "./ImageUploader";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {useSignUpAsBarberMutation, useUpdateBarberAvatarMutation} from "../redux/slices/barberApiSlice";

function BarberShopSignUpForm() {
    let navigate = useNavigate();

    const [data, setData] = React.useState({});
    const [file, setFile] = React.useState(new FormData());


    const [signUpAsBarber, { isLoading }] = useSignUpAsBarberMutation();
    const [updateBarberAvatar] = useUpdateBarberAvatarMutation();

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

    const submitSignUp  = async (e) => {
        e.preventDefault();
        try {
            if(file.has("image")) {
                const res = await signUpAsBarber(data).unwrap();
                await updateBarberAvatar({body: file, token: res?.token}).unwrap();
                toast.success("Successfully Signed Up");
                navigate('/sign-in');
            }else {
                toast.error("Logo is Missed");
            }
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    return (
        <React.Fragment>
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="">
                        <h3 className="text-primary"><i className="fa fa-cut me-2" />LOOKY</h3>
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
                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={(e)=>submitSignUp(e)}>{
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Sign Up"
                }</button>
                <p className="text-center mt-3">Already have an Account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </React.Fragment>
    );
}

export default BarberShopSignUpForm;