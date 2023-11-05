import React, {useState} from 'react';
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {BeatLoader} from "react-spinners";

export default function EditAppointmentForm({appointment}) {
    const [data, setData] = React.useState({});
    const [text, setText] = useState('');

    let { userInfo } = useSelector(state => state.auth);

    const change = (index,value) => {
        if(value === "" || value === null || value === undefined){
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
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="">
                    <div className="form-floating mt-2 w-auto">
                        <InputText value={''} type="text" onChange={(e)=>change("title",e.target.value)} placeholder="Title" style={{width: '100%'}}/>
                    </div>

                </div>
            </div>
            <div className="p-inputgroup mb-2">
                <Editor value={''} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <button type="submit" className="btn-primary py-3 w-90 mb-2" onClick={(e)=> console.log(e)}>{
                    'isLoading' ? <BeatLoader color="#fff" size={10} /> : "Save"
                }</button>
            </div>
        </div>
    )
}
