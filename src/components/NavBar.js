import React from "react";
import { useSelector } from "react-redux";
import NavBarGuest from "./NavBarGuest";
import BarberNavBar from "./BarberNavBar";
import CustomerNavBar from "./CustomerNavBar";

function NavBar() {

    let { userInfo } = useSelector(state => state.auth);

    return (
        <React.Fragment>
            { userInfo !== null ? (
                userInfo.role === 'barber' ? <BarberNavBar /> : <CustomerNavBar/>
            ) : <NavBarGuest/>}
        </React.Fragment>
    );
}

export default NavBar;