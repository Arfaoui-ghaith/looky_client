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
import {Editor} from "primereact/editor";
import {InputNumber} from "primereact/inputnumber";
import {FileUpload} from "primereact/fileupload";

function AddService({barber,visible,onChange}) {

    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [file, setFile] = React.useState(new FormData());
    const [text, setText] = useState('');
    const [galleryCondition, setGalleryCondition] = useState(false)

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
            style={{ width: '35vw', background: '#191C24', padding: 'none' }}
            onHide={() => onChange(false)}
        >
            <div className="d-flex align-items-center justify-content-between">
                <div className="">
                    <div className="form-floating mt-2 w-auto">
                        <InputText type="text" placeholder="Title" style={{width: '100%'}}/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="form-floating me-1 mt-3">
                            <InputNumber placeholder="Price" value={data.price ?? 0} onValueChange={(e)=>change("price",e.target.value)} mode="currency" currency="TND" />
                        </div>
                        <div className="form-floating mt-3">
                            <Calendar placeholder="Duration" value={data.duration} onChange={(e) => change("duration",e.target.value)} timeOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-inputgroup mb-2">
                { galleryCondition ?
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                : <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                }
            </div>

            <div className="d-flex align-items-center justify-content-between mb-3">
                <button type="submit" className="btn-primary py-3 w-90 mb-2" onClick={()=> console.log()}>{
                    loading ? <BeatLoader color="#fff" size={10} /> : "Save and CLose"
                }</button>
                <button type="submit" className="btn-primary py-3 w-90 mb-2" onClick={()=> setGalleryCondition(true)}>{
                    loading ? <BeatLoader color="#fff" size={10} /> : "Save And Next"
                }</button>
            </div>
        </Sidebar>

    )
}

export default AddService;