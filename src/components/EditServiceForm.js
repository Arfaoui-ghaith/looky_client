import React, {useState} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {useSelector} from "react-redux";
import {useAddServiceMutation, useUpdateServiceMutation} from "../redux/slices/servicesApiSlice";
import toast from "react-hot-toast";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Editor} from "primereact/editor";
import {BeatLoader} from "react-spinners";
import {TabPanel, TabView} from "primereact/tabview";
import {OrderList} from "primereact/orderlist";
import GalleryList from "./GalleryList";
import MultiUploader from "./MultiUploader";

export default function EditServiceForm({service}) {
    const [data, setData] = React.useState({
        title: service?.title,
        price: service?.price,
        duration: service?.duration,
        description: service?.description
    });
    const [text, setText] = useState('');

    let { userInfo } = useSelector(state => state.auth);
    const [addService, { isLoading,isSuccess, error }] = useUpdateServiceMutation();

    const submitUpdateService  = async (e) => {
        data.description = text;
        if(data.description == ''){
            data.description = service.description
        }
        e.preventDefault();
        try {
            const res = await addService({body: data, id: service.id, token: userInfo.token}).unwrap();
            toast.success("Service Updated Successfully!");
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

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
            <h1 className="text-uppercase mb-4">Edit your service details and gallery here!</h1>
            <TabView style={{boxShadow: 'none', border: "#EB1616"}}>
                <TabPanel leftIcon="pi pi-file-edit mr-2" header="Service" style={{background: 'none', border: "#EB1616"}}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="form-floating mt-2 w-auto">
                                <InputText value={data.title} type="text" onChange={(e)=>change("title",e.target.value)} placeholder="Title" style={{width: '100%'}}/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="form-floating me-2 mt-3">
                                    <InputNumber value={data.price} placeholder="Price" onValueChange={(e)=>change("price",e.target.value)} mode="currency" currency="TND" />
                                </div>
                                <div className="form-floating mt-4">
                                    <div className="p-inputgroup mb-2">
                                        <InputNumber value={data.duration} placeholder="Duration in mn" onValueChange={(e) => change("duration",e.target.value)} min={0}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-inputgroup mb-2">
                        <Editor value={data.description !== undefined || data.description !== null ? data.description : ''} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <button type="submit" className="btn-primary py-3 w-90 mb-2" onClick={(e)=> submitUpdateService(e)}>{
                            isLoading ? <BeatLoader color="#fff" size={10} /> : "Save"
                        }</button>
                    </div>
                </TabPanel>
                <TabPanel leftIcon="pi pi-images mr-2" header="Gallery" style={{background: 'none'}}>
                    <div className="card xl:flex xl:justify-content-center">
                        <MultiUploader className="mb-2" onChange={(e)=>e} visible={true} serviceId={service.id}/>
                        <GalleryList images={service.gallery} ></GalleryList>
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}
