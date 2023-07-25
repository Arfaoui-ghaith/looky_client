import React from "react";

function CustomerAvatar() {
    return (
        <React.Fragment>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
                        <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0 show"
                     data-bs-popper="none">
                    <a href="#" className="dropdown-item">My Profile</a>
                    <a href="#" className="dropdown-item">Settings</a>
                    <span href="#" className="dropdown-item" onClick={() => localStorage.removeItem("lookyCustomerToken")}>Log Out</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CustomerAvatar;


