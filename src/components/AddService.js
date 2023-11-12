import React, {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import toast from "react-hot-toast";
import { InputText } from 'primereact/inputtext';
import {Sidebar} from "primereact/sidebar";
import {Editor} from "primereact/editor";
import {InputNumber} from "primereact/inputnumber";
import {useAddServiceMutation} from "../redux/slices/servicesApiSlice";
import {useSelector} from "react-redux";
import MultiUploader from "./MultiUploader";

function AddService({visible,onChange}) {

    const [data, setData] = React.useState({description: ''});
    const [text, setText] = useState('');
    //const [galleryCondition, setGalleryCondition] = useState(!visible);
    const [serviceId, setServiceId] = useState();

    let { userInfo } = useSelector(state => state.auth);
    const [addService, { isLoading,isSuccess }] = useAddServiceMutation();

    const submitAddService  = async (e) => {
        data.description = text;
        console.log(data)
        e.preventDefault();
        try {
            const res = await addService({body: data, token: userInfo.token}).unwrap();
            console.log(res)
            setServiceId(res.service.id)
            //setGalleryCondition(true);
            toast.success("Service Added Successfully!");
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    useEffect(() => {
        //setGalleryCondition(!visible)
    },[visible])

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
        <Sidebar
            position="right"
            header="Add New Team Mate!"
            visible={visible}
            style={{ width: '40vw', background: '#191C24', padding: 'none' }}
            onHide={() => onChange(false)}
        >
            {
                !isSuccess ?
            <div className="d-flex align-items-center justify-content-between">
                <div className="">
                    <div className="form-floating mt-2 w-auto">
                        <InputText type="text" onChange={(e)=>change("title",e.target.value)} placeholder="Title" style={{width: '100%'}}/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="form-floating me-2 mt-3">
                            <InputNumber placeholder="Price" onValueChange={(e)=>change("price",e.target.value)} mode="currency" currency="TND" />
                        </div>
                        <div className="form-floating mt-4">
                            <div className="p-inputgroup mb-2">
                                <InputNumber placeholder="Duration in mn" onValueChange={(e) => change("duration",e.target.value)} min={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ''
            }
            <div className="p-inputgroup mb-2">
                { isSuccess ?
                    <div>
                    <h1 className="text-uppercase mb-4">Upload your service gallery here!</h1>
                    <p>Note: the first uploaded image will be the primary one for this service.</p>
                        <MultiUploader onChange={visible=>onChange(visible)} visible={visible} serviceId={serviceId}/> </div>:
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                }
            </div>

            <div className="d-flex align-items-center justify-content-between mb-3">
                { !isSuccess?
                    <button type="submit" className="btn-primary py-3 w-90 mb-2" onClick={(e)=> submitAddService(e)}>{
                        isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit"
                    }</button> : ''
                }
            </div>
        </Sidebar>

    )
}

export default AddService;