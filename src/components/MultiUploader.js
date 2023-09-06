import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import {useSelector} from "react-redux";
import {useAddImagesMutation} from "../redux/slices/servicesApiSlice";
import toast from "react-hot-toast";


export default function MultiUploader({serviceId,onChange,visible}) {

    let { userInfo } = useSelector(state => state.auth);
    const [addImages, { isLoading,isSuccess, error }] = useAddImagesMutation();

    console.log("serviceId",serviceId);


    const submitAddImages  = async (e) => {
        try {
            const formData = new FormData();
            for (let image of e.files) {
                formData.append('images', image);
            }
            const res = await addImages({body: formData, id: serviceId,token: userInfo.token}).unwrap();
            console.log(res)
            toast.success("Images Added Successfully!");
            onChange(false);
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    return (
        <React.Fragment>
            <FileUpload customUpload={true} uploadHandler={(e) => submitAddImages(e)} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </React.Fragment>
    )
}