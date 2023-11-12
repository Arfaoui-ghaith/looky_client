import React, {useEffect} from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FeedBacks from "../../components/FeedBacks";
import {useParams} from "react-router-dom";
import {useGetServiceQuery} from "../../redux/slices/servicesApiSlice";
import PageHeader from "../../components/PageHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import AboutService from "../../components/AboutService";

function ServiceDetails() {
    const {id} = useParams();

    let {data: res, isLoading } = useGetServiceQuery({id});

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
            <span href="#" className="btn btn-primary btn-lg-square back-to-top"><i
                className="bi bi-arrow-up" /></span>
        </React.Fragment>
    );
}

export default ServiceDetails;