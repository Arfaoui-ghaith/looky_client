import React from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
function CustomerProfile() {

    const passwordTab = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={options.className}>
                <i className="pi pi-lock mr-2" />
                {options.titleElement}
            </button>
        );
    };

    const profileTab = (options) => {
        return (
            <div className="flex align-items-center px-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" className="mx-2" />
                Amy Elsner
            </div>
        )
    };

    return (
        <React.Fragment>
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
                                <p className="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </TabPanel>

                            <TabPanel header="Password" headerTemplate={passwordTab} headerClassName="flex align-items-center">
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </TabPanel>

                        </TabView>
                    </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default CustomerProfile;