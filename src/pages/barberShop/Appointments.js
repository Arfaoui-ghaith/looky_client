import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import AppointmentsTable from "../../components/AppointmentsTable";
import { useSelector } from "react-redux";
import { useAppointmentsQuery } from "../../redux/slices/appointmentsApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

function BarberShopAppointments() {

    let { userInfo } = useSelector(state => state.auth);
    const [appointments, setAppointments] = useState([]);

    let {data: res, isLoading } = useAppointmentsQuery({token: userInfo.token});

    React.useEffect(() => {
        if(res){
            setAppointments(res.appointment)
        }
    },[res]);

    const formatingAppointments = (appointment) => {
        console.log(appointment)
        if(appointment !== undefined) {
            return appointment.map(ap => {
                const date = new Date(ap.date)
                return {
                    id: ap.id,
                    name: `${ap.customer?.firstName} ${ap.customer?.lastName}`,
                    date,
                    service: ap.service.title,
                    status: ap.status,
                    price: `${ap.service.price} DT`,
                    avatar: ap.customer.image ? ap.customer.image : '/img/hairstyle.png',
                    email: ap.customer.email,
                    appointment: ap
                }
            })
        }
        return []
    }

    if(isLoading){
        return (<LoadingSpinner isLoading={isLoading}/>)
    }

    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Appointments"/>

            <AppointmentsTable isLoading={isLoading} appointments={formatingAppointments(appointments)} />

            <Footer/>
        </React.Fragment>
    );
}

export default BarberShopAppointments;