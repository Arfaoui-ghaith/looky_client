import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import FeedBacks from "../../components/FeedBacks";
import BarberShopTeam from "../../components/BarberShopTeam";
import BarberServices from "../../components/BarberServices";
import {useNavigate, useParams} from "react-router-dom";
import {fetchBarberInfos} from "../../services/barberShopService";
import BookAppointment from "../../components/BookAppointment";

function BarberShops() {
    const [visible, setVisible] = useState(false);
    const [barber, setBarber] = React.useState();

    const {id} = useParams();

    React.useEffect(() => {
        async function fetchData() {
            const res = await fetchBarberInfos(id);
            if (res.name === 'AxiosError') {
                console.log(res);
            } else {
                const {barberShop} = res.data;
                setBarber(() => barberShop);
            }
        }
        fetchData().then();
    },[id]);

    const navigate = useNavigate();

    const openBookAppointment = () => {
        if(localStorage.getItem("lookyCustomerToken") === null){
            navigate("/sign-in");
        }else{
            setVisible(!visible)
        }
    }


    return (
        <React.Fragment>
            <NavBar/>
            <div className="container-fluid page-header py-5 mb-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">{barber ? barber.name : ""}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        { barber !== undefined ?
                            <div className="breadcrumb justify-content-center text-uppercase mb-0">
                                <button
                                   className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block" onClick={() => openBookAppointment()}>Appointment<i
                                    className="fa fa-arrow-right ms-3"></i></button>
                                <BookAppointment barber={barber} onChange={visible=>setVisible(visible)} visible={visible}/>
                            </div> : ""
                        }
                    </nav>
                </div>
            </div>
            {barber ? <AboutUs barber={barber}/> : ""}
            <BarberShopTeam/>
            {barber ? <BarberServices services={barber.services}/> : "" }
            <FeedBacks/>
            <Footer/>
            <span className="btn btn-primary btn-lg-square back-to-top"><i
                className="bi bi-arrow-up"></i></span>
        </React.Fragment>
    );
}

export default BarberShops;