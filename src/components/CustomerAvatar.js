import React from "react";
import {useNavigate} from "react-router-dom";

function CustomerAvatar({barber}) {
    const navigate = useNavigate();

    const logout = ()=> {
        console.log("hi")
        localStorage.removeItem("lookyCustomerToken");
        navigate("/sign-in");
    }
    return (
        <React.Fragment>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">My Profile</a>
                <div className="dropdown-menu m-0">
                    <a href="" className="dropdown-item">Settings</a>
                    <span style={{cursor: "pointer"}} onClick={() => logout()} className="dropdown-item">Log Out</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CustomerAvatar;


