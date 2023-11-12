import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import AppointmentsTable from "../../components/customer/AppointmentsTable";
import { useSelector } from "react-redux";
import { useInfosCustomerQuery } from "../../redux/slices/customerApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

function CustomerAppointments() {

    let { userInfo } = useSelector(state => state.auth);
    const [appointments, setAppointments] = useState([]);

    let {data: res, isLoading } = useInfosCustomerQuery({token: userInfo.token});

    React.useEffect(() => {
        if(res){
            console.log(res);
            setAppointments(res.customer.appointments)
        }
    },[res]);

    const formatingAppointments = (appointment) => {
        if(appointment !== undefined) {
            return appointment.map(ap => {
                const date = new Date(ap.date)
                return {
                    id: ap.id,
                    name: `${ap.barberShop?.name}`,
                    date,
                    service: ap.service.title,
                    status: ap.status,
                    price: `${ap.service.price} DT`,
                    avatar: ap.barberShop.logo ? ap.barberShop.logo : '/img/hairstyle.png',
                    email: ap.barberShop.email,
                    phone: ap.barberShop.phones.length > 0 ? ap.barberShop.phones.find(el => el.primary === true).phone : '',
                    data: ap
                }
            })
        }
        return []
    }

    return (
        <React.Fragment>
            <LoadingSpinner isLoading={isLoading}/>
            <NavBar/>
            <PageHeader title="Appointments"/>

            <AppointmentsTable isLoading={isLoading} appointments={formatingAppointments(appointments)} />

            <Footer/>
        </React.Fragment>
    );
}

export default CustomerAppointments;