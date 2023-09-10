import React, {useEffect, useState} from "react";
import {Sidebar} from "primereact/sidebar";
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