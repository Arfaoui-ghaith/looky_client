import React, {useState} from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import { useInfosQuery } from "../redux/slices/barberApiSlice";
import ServicesTable from "../components/ServicesTable";

function BarberShopServices() {

    let { userInfo } = useSelector(state => state.auth);
    const [services, setServices] = useState([]);

    let {data: res, isLoading, error } = useInfosQuery({token: userInfo.token});

    React.useEffect(() => {
        console.log(res)
        if(res){
            setServices(res.services)
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
                }
            })
        }
        return []
    }

    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Services"/>

            <ServicesTable isLoading={isLoading} appointments={formatingAppointments(services)} />

            <Footer/>
        </React.Fragment>
    );
}

export default BarberShopServices;