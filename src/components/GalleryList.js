import { Button as Btn } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import {useSelector} from "react-redux";
import {useDeleteImageMutation, useUpdateServiceMutation} from "../redux/slices/servicesApiSlice";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import React, {useRef, useState} from "react";
import {ConfirmPopup} from "primereact/confirmpopup";

export default function GalleryList({ images }) {

    const [visible, setVisible] = useState(false);
    let { userInfo } = useSelector(state => state.auth);
    const [deleteImage, { isLoading,isSuccess, error }] = useDeleteImageMutation();
    const buttonEl = useRef(null);

    const submitDeleteImage  = async (id) => {
        try {
            const res = await deleteImage({token: userInfo.token, id }).unwrap();
            toast.success("Image Deleted Successfully!");
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    const reject = () => {

    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-11 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={data.image} alt={data.id} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)}
                                          message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={() => submitDeleteImage(data.id)} reject={reject} />
                            <div className="card flex flex-wrap gap-2 justify-content-center">
                                <Btn ref={buttonEl} onClick={() => setVisible(true)} className="btn-primary py-3 w-90">{
                                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Delete"
                                }</Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={images} itemTemplate={itemTemplate} rows={3} inline scrollHeight="30%" header="Scroll Down to Load More" />
        </div>
    )
}
