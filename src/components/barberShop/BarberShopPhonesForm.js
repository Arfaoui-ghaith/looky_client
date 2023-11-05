import React from "react";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";
import {useUpdateBarberPasswordMutation} from "../../redux/slices/barberApiSlice";
import {RadioButton} from "primereact/radiobutton";
import {InputText} from "primereact/inputtext";

function BarberShopPhonesForm(){

    let navigate = useNavigate();
    const [data, setData] = React.useState({});

    let { userInfo } = useSelector(state => state.auth);
    const [updateBarberPassword, { isLoading }] = useUpdateBarberPasswordMutation();

    const [radioValue, setRadioValue] = React.useState('');

    const submitUpdate  = async (e) => {
        e.preventDefault();
        try {
            if(data.currentPassword === undefined || data.currentPassword === null){
                toast.error("Barber Current Password Empty!");
            }else {
                if (data.password === data.confirmPassword) {
                    await updateBarberPassword({body: data, token: userInfo.token}).unwrap();
                    toast.success("Barber Password Updated Successfully!");
                    navigate('/barber-shop/profile');
                } else {
                    toast.error("Barber Password Not Confirmed!");
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
                <div className="form-floating p-inputgroup flex-1 mt-3">
                    <InputText type="text" className="form-control" id="floatingInput" placeholder="Current" onChange={(e) => change("currentPassword", e.target.value)}/>
                    <label htmlFor="floatingInput">Phone 1</label>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>
                <div className="form-floating p-inputgroup flex-1 mt-3">
                    <InputText type="text" className="form-control" id="floatingInput" placeholder="Current" onChange={(e) => change("currentPassword", e.target.value)}/>
                    <label htmlFor="floatingInput">Phone 2</label>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>
                <div className="form-floating p-inputgroup flex-1 mt-3">
                    <InputText type="text" className="form-control" id="floatingInput" placeholder="Current" onChange={(e) => change("currentPassword", e.target.value)}/>
                    <label htmlFor="floatingInput">Phone 3</label>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb3" value="rb3" checked={radioValue === 'rb3'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
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

export default BarberShopPhonesForm;