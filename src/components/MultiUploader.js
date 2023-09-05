import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import {useSelector} from "react-redux";
import {useAddImagesMutation} from "../redux/slices/servicesApiSlice";
import toast from "react-hot-toast";


export default function MultiUploader({serviceId}) {
    const [images, setImages] = useState();
    let { userInfo } = useSelector(state => state.auth);
    const [addImages, { isLoading,isSuccess, error }] = useAddImagesMutation();

    console.log("serviceId",serviceId);
    const handleImages = (e) => {
        const images = e.files;
        const formData = new FormData();

        for (let image of images) {
            formData.append('images', image);
        }

        if (images) {
            setImages(formData);
        }
    }

    const submitAddImages  = async (e) => {
        handleImages(e);
        console.log(images)
        try {
            const res = await addImages({body: images, id: serviceId,token: userInfo.token}).unwrap();
            console.log(res)
            toast.success("Images Added Successfully!");

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