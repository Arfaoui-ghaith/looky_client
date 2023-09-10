import React, {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import {Sidebar} from "primereact/sidebar";
import {Editor} from "primereact/editor";
import {InputNumber} from "primereact/inputnumber";
import {useAddServiceMutation} from "../redux/slices/servicesApiSlice";
import {useSelector} from "react-redux";
import MultiUploader from "./MultiUploader";
import {AccordionTab} from "primereact/accordion";
import {Accordion} from "@nextui-org/react";
import EditServiceForm from "./EditServiceForm";

function EditService({visible, onChange, service}) {

    return (
        <Sidebar
            position="right"
            header="Add New Team Mate!"
            visible={visible}
            style={{ width: '40vw', background: '#191C24', padding: 'none' }}
            onHide={() => onChange(false)}
        >
            <EditServiceForm service={service}/>
        </Sidebar>

    )
}
export default EditService;