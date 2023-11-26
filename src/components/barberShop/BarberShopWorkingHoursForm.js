import React from "react";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";
import {useUpdateBarberPasswordMutation} from "../../redux/slices/barberApiSlice";
import {RadioButton} from "primereact/radiobutton";
import {InputText} from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import {Calendar} from "primereact/calendar";
import {TreeSelect} from "primereact/treeselect";

function BarberShopWorkingHoursForm(){

    let navigate = useNavigate();
    const [selectedDay, setSelectedDay] = React.useState("monday")
    const [data, setData] = React.useState({
        "monday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "tuesday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "wednesday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "thursday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "friday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "saturday": {
            "open": "",
            "close": "",
            isClosed: false
        },
        "sunday": {
            "open": "",
            "close": "",
            isClosed: false
        }
    });

    let { userInfo } = useSelector(state => state.auth);
    const [updateBarberPassword, { isLoading }] = useUpdateBarberPasswordMutation();

    const [time, setTime] = React.useState();

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

    const dateFix = (v) => {
        let date = new Date(data.date);
        let time = new Date(v);
        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        return date;
    }

    const changeData = () => {
        data[selectedDay].isClosed = !data[selectedDay].isClosed
        setData(data);
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

    let calendarStyle = {
        color: "#6C7293",
        background: "#000",
        width: "100%",
        borderColor: "none"
    }

    return(
        <div className="row">
            <div className="col-lg-10 mt-3 mx-auto">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-floating mb-3">
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onClick={(e) => change("serviceId",e.target.value)}>
                                {
                                    Object.keys(data).map(s => <option key={s} value={s}>
                                        {s}
                                    </option>)
                                }
                            </select>
                            <label htmlFor="floatingSelect">Select day</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <span className="p-float-label">
                            <Calendar className={"mt-1"} id={selectedDay} style={calendarStyle} value={time} onChange={(e) => { change(selectedDay,{...data[selectedDay], "open": dateFix(e.target.value)})}} timeOnly/>
                            <label htmlFor={selectedDay}>Open</label>
                        </span>
                    </div>
                    <div className="col-md-3">
                        <span className="p-float-label">
                            <Calendar className={"mt-1"} id={selectedDay} style={calendarStyle} value={time} onChange={(e) => { change(selectedDay,{...data[selectedDay], "close": dateFix(e.target.value)})}} timeOnly/>
                            <label htmlFor={selectedDay}>Close</label>
                        </span>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="switch1">Remember Me</label>
                        <InputSwitch inputId="switch1" checked={data[selectedDay].isClosed} onChange={() => changeData()}/>
                    </div>
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

export default BarberShopWorkingHoursForm;