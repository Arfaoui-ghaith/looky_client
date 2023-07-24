import React from "react";
import "./SignIn.css";
import CustomerSignInForm from "../components/CustomerSignInForm";
import BarberShopSignInForm from "../components/BarberShopSignInForm";


function SignIn() {
    let [condition,setCondition] = React.useState(false);

    let container1 = "container right-panel-active"
    let container2 = "container"
    return (
        <React.Fragment>
            <div className="container-fluid body">
                <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-12">
                        <div className="bg-secondary my-4 mx-3">

                        <div className={condition ? container1 : container2}>
                            <div className="form-container sign-up-container">
                                <div className="p-4">
                                    <CustomerSignInForm/>
                                </div>
                            </div>
                            <div className="form-container sign-in-container">
                                <div className="p-4">
                                    <BarberShopSignInForm/>
                                </div>
                            </div>
                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1 className="h11">Hi, Customer!</h1>
                                        <p className="p1">To sign in you can use your personel or social infos.</p>
                                        <button className="ghost btn-primary" onClick={()=>setCondition(false)}>Im Barber!</button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1 className="h11">Hi, Barber!</h1>
                                        <p className="p1">To sign in you can use your personel infos only.</p>
                                        <button className="ghost btn-primary" onClick={()=>setCondition(true)}>Im Customer!</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignIn;