import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {BeatLoader} from "react-spinners";
import {Calendar} from "primereact/calendar";
import toast from "react-hot-toast";
import {bookAppointment} from "../services/appointmentService";
import {Link} from "react-router-dom";
import ImageUploader from "./ImageUploader";
import { InputText } from 'primereact/inputtext';
import {Sidebar} from "primereact/sidebar";

function AddTeamMember({barber,visible,onChange}) {

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

    return (
        <Sidebar
            position="right"
            header="Add New Team Mate!"
            visible={visible}
            style={{ width: '50vw', background: '#191C24', padding: 'none' }}
            onHide={() => onChange(false)}
        >
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                    <ImageUploader onChange={file => setFile(file)}/>
                </div>
                <div className="ml-2 mt-3">
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
                    <div className="form-floating ">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="member role" onChange={(e)=>change("name",e.target.value)}/>
                        <label htmlFor="floatingInput">Member Role</label>
                    </div>
                </div>
            </div>
            <div className="p-inputgroup mb-2">
                <span className="p-inputgroup-addon" style={{color: '#fff', background: "#EB1616", border: 'none'}}>
                    <i className="pi pi-facebook"></i>
                </span>
                <InputText placeholder="Facebook" />
            </div>
            <div className="p-inputgroup mb-2">
                <span className="p-inputgroup-addon" style={{color: '#fff', background: "#EB1616", border: 'none'}}>
                    <i className="pi pi-youtube"></i>
                </span>
                <InputText placeholder="Youtube" />
            </div>
            <div className="p-inputgroup mb-4">
                <span className="p-inputgroup-addon" style={{color: '#fff', background: "#EB1616", border: 'none'}}>
                    <i className="pi pi-instagram"></i>
                </span>
                <InputText placeholder="Instagram" />
            </div>

            <div>
                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={()=> console.log()}>{
                    loading ? <BeatLoader color="#fff" size={10} /> : "Submit"
                }</button>
            </div>
        </Sidebar>

    )
}

export default AddTeamMember;