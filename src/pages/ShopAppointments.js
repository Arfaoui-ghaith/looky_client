import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import BarberCard from "../components/BarberCard";
import Footer from "../components/Footer";
import AppointmentsTable from "../components/AppointmentsTable";

function ShopAppointments() {
    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Appointments"/>

            <AppointmentsTable />

            <Footer/>
        </React.Fragment>
    );
}

export default ShopAppointments;