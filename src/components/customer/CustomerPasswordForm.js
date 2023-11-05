import React from "react";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {useUpdateCustomerPasswordMutation} from "../../redux/slices/customerApiSlice";
import {useNavigate} from "react-router-dom";

function CustomerPasswordForm(){

    let navigate = useNavigate();
    const [data, setData] = React.useState({});

    let { userInfo } = useSelector(state => state.auth);
    const [updateCustomerPassword, { isLoading }] = useUpdateCustomerPasswordMutation();

    const submitUpdate  = async (e) => {
        e.preventDefault();
        try {
            if(data.currentPassword === undefined || data.currentPassword === null){
                toast.error("Customer Current Password Empty!");
            }else {
                if (data.password === data.confirmPassword) {
                    await updateCustomerPassword({body: data, token: userInfo.token}).unwrap();
                    toast.success("Customer Password Updated Successfully!");
                    navigate('/customer/profile');
                } else {
                    toast.error("Customer Password Not Confirmed!");
                }
            }

        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }


    const change = (index,value) => {
        if(value === "" || value === null || value === undefined){
            let form = data;
            delete form[index];
            setData(form);
        }else {
            let form = {...data};
            form[index] = value;
            setData(form);
        }
    }

    return(
        <div className="row">
            <div className="col-lg-8 mt-3 mx-auto">
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Current" onChange={(e) => change("currentPassword", e.target.value)}/>
                    <label htmlFor="floatingInput">Current Password</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="password" className="form-control" id="floatingInput" placeholder="New" onChange={(e) => change("password", e.target.value)}/>
                    <label htmlFor="floatingInput">New Password</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Confirm" onChange={(e) => change("confirmPassword", e.target.value)}/>
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <div className="form-floating mt-3">
                    <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={(e)=> submitUpdate(e)}>{
                        isLoading ? <BeatLoader color="#fff" size={10} /> : "Save"
                    }</button>
                </div>
            </div>
        </div>

    )
}

export default CustomerPasswordForm;