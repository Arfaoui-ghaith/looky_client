import React from "react";
import {Sidebar} from "primereact/sidebar";
import EditAppointmentForm from "./EditAppointmentForm";

function EditAppointment({visible, onChange, appointment}) {

    return (
        <Sidebar
            position="right"
            header="Update Appointment"
            visible={visible}
            style={{ width: '40vw', background: '#191C24', padding: 'none' }}
            onHide={() => onChange(false)}
        >
            <EditAppointmentForm service={appointment}/>
        </Sidebar>

    )
}
export default EditAppointment;