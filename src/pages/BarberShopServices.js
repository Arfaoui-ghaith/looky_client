import React, {useState} from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import { useInfosQuery } from "../redux/slices/barberApiSlice";
import ServicesTable from "../components/ServicesTable";

function BarberShopServices() {

    let { userInfo } = useSelector(state => state.auth);

    let {data: res, isLoading, error } = useInfosQuery({token: userInfo.token});


    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Services"/>

            <ServicesTable isLoading={isLoading} services={res !== undefined ? res.barberShop.services : []} />

            <Footer/>
        </React.Fragment>
    );
}

export default BarberShopServices;