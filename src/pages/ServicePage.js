import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import FeedBacks from "../components/FeedBacks";
import BarberShopTeam from "../components/BarberShopTeam";
import BarberServices from "../components/BarberServices";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useGetServiceQuery} from "../redux/slices/servicesApiSlice";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import AboutService from "../components/AboutService";

function ServicePage() {
    const {id} = useParams();

    let { userInfo } = useSelector(state => state.auth);

    let {data: res, isLoading, error } = useGetServiceQuery({id});

    const navigate = useNavigate();

    useEffect(() => {
        console.log(res);
    },[res])

    return (
        <React.Fragment>
            <LoadingSpinner isLoading={isLoading}/>
            <NavBar/>
            <PageHeader title={"Service"}/>
            <AboutService service={res?.service}/>
            <FeedBacks/>
            <Footer/>
            <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i
                className="bi bi-arrow-up"></i></a>
        </React.Fragment>
    );
}

export default ServicePage;