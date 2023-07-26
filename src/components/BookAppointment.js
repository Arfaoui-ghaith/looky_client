import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {BeatLoader} from "react-spinners";
import {Calendar} from "primereact/calendar";
import toast from "react-hot-toast";
import {bookAppointment} from "../services/appointmentService";

function BookAppointment({barber,visible,onChange}) {

    const [data, setData] = React.useState({barberShopId: barber.id});
    const [loading, setLoading] = React.useState(false);
    const [time, setTime] = React.useState();


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

    const dateFix = (v) => {
        let date = new Date(data.date);
        let time = new Date(v);
        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        return date;
    }

    const book = async() => {
        setLoading(true);
        const res = await bookAppointment({...data, date: data.date.toISOString()});
        if(res.name === 'AxiosError'){
            toast.error(res.response.data.message);
            console.log(res);
        }else{
            console.log(res);
            toast.success("Appointment Booked Successfully");
        }
        setLoading(false);
        onChange(false);
    }

    let calendarStyle = {
        color: "#6C7293",
        background: "#000",
        width: "100%",
        borderColor: "none"
    }

    const footerContent = (
        <div>
            <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={()=> book()}>{
                loading ? <BeatLoader color="#fff" size={10} /> : "BOOK"
            }</button>
        </div>
    );

    return (

            <Dialog
                header="Book Your Appointment Now!"
                visible={visible}
                style={{ width: '50vw', background: '#6C7293' }}
                onHide={() => onChange(false)}
                footer={footerContent}>
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onClick={(e) => change("serviceId",e.target.value)}>
                        <option selected="">Open the services menu</option>
                        {
                            barber.services.map(s => <option value={s.id}>
                                    {s.title} - {s.price} TND
                            </option>)
                        }
                    </select>
                    <label htmlFor="floatingSelect">Works with selects</label>
                </div>
                <div className="form-floating mb-3">
                    <Calendar placeholder="Birth Date" style={calendarStyle} value={data.date} onChange={(e) => change("date",e.target.value)} showIcon />
                </div>
                { data.date !== undefined ?
                <div className="form-floating mb-3">
                    <Calendar placeholder="Birth Date" style={calendarStyle} value={time} onChange={(e) => { change("date",dateFix(e.target.value)); setTime(e.target.value);}} timeOnly/>
                </div> : ""
                }
            </Dialog>

    )
}

export default BookAppointment;