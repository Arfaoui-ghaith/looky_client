import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import AppointmentsTable from "../components/AppointmentsTable";
import { useSelector } from "react-redux";
import { useAppointmentsQuery } from "../redux/slices/appointmentsApiSlice";

function ShopAppointments() {

    let { userInfo } = useSelector(state => state.auth);

    let {data: {appointment}, isLoading, error } = useAppointmentsQuery({token: userInfo.token});

    React.useEffect(() => {
        console.log(appointment)
    },[appointment]);

    const formatingAppointments = (appointment) => {
        if(appointment !== undefined) {
            return appointment.map(ap => {
                return {
                    id: ap.id,
                    name: `${ap.customer?.firstName} ${ap.customer?.lastName}`,
                    date: ap.date,
                    service: ap.service.title,
                    status: ap.confirmed ? "active" : "paused",
                    price: ap.service.price,
                    avatar: ap.customer.image,
                    email: ap.customer.email,
                }
            })
        }
        return []
    }

    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Appointments"/>

            <AppointmentsTable isLoading={isLoading} appointments={formatingAppointments(appointment)} />

            <Footer/>
        </React.Fragment>
    );
}

export default ShopAppointments;