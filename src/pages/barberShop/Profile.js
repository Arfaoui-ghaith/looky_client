import React from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Avatar } from 'primereact/avatar';
import {useSelector} from "react-redux";
import {useInfosQuery} from "../../redux/slices/barberApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
import BarberShopPasswordForm from "../../components/barberShop/BarberShopPasswordForm";
import BarberShopProfileInfosForm from "../../components/barberShop/BarberShopProfileInfosForm";
import BarberShopPhonesForm from "../../components/barberShop/BarberShopPhonesForm";
function BarberShopProfile() {
    let { userInfo } = useSelector(state => state.auth);
    let {data: res, isLoading, isSuccess } = useInfosQuery({token: userInfo.token});

    console.log(res)
    const passwordTab = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={options.className}>
                <i className="pi pi-lock mr-2" />
                {options.titleElement}
            </button>
        );
    };

    const phonesTab = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={options.className}>
                <i className="pi pi-phone mr-2" />
                {options.titleElement}
            </button>
        );
    };

    const profileTab = (options) => {
        if(isSuccess){
            return (
                <div className="flex align-items-center px-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                    <Avatar image={res.barberShop.logo ?? "https://i.ibb.co/jVxWHz3/hairstyle.png"} shape="circle" className="mx-2" />
                    {res.barberShop.name}
                </div>
            )
        }
    };

    return (
        <React.Fragment>
            <LoadingSpinner isLoading={isLoading} />
            <NavBar/>
            <PageHeader title={"Profile"} />
            <div
                className="container-xxl py-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp"
                }}
            >
                <div className="container text-center">
                    <TabView >
                        <TabPanel headerTemplate={profileTab} headerClassName="flex align-items-center">
                            {
                                isSuccess ? <BarberShopProfileInfosForm barber={res.barberShop} /> : ''
                            }
                        </TabPanel>

                        <TabPanel header="Password" headerTemplate={passwordTab} headerClassName="flex align-items-center">
                            {
                                isSuccess ? <BarberShopPasswordForm barber={res.barberShop} /> : ''
                            }
                        </TabPanel>

                        <TabPanel header="Phones" headerTemplate={phonesTab} headerClassName="flex align-items-center">
                            {
                                isSuccess ? <BarberShopPhonesForm barber={res.barberShop} /> : ''
                            }
                        </TabPanel>

                    </TabView>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default BarberShopProfile;