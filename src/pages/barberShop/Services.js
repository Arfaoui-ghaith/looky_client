import React from "react";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

import { useSelector } from "react-redux";
import { useInfosQuery } from "../../redux/slices/barberApiSlice";
import ServicesTable from "../../components/ServicesTable";
import LoadingSpinner from "../../components/LoadingSpinner";

function Services() {

    let { userInfo } = useSelector(state => state.auth);

    let {data: res, isLoading, isSuccess} = useInfosQuery({token: userInfo.token});
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        if (isSuccess){
            setServices(res?.barberShop?.services);
        }
    },[isSuccess, res]);

    return (
        <React.Fragment>
            <LoadingSpinner isLoading={isLoading}/>
            <NavBar/>
            <PageHeader title="Services"/>

            <ServicesTable isLoading={isLoading} services={services} />

            <Footer/>
        </React.Fragment>
    );
}

export default Services;