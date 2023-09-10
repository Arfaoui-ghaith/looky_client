import React, {useState} from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import AddTeamMember from "../components/AddTeamMember";
import {Button as Btn} from "primereact/button";
import {useInfosQuery} from "../redux/slices/barberApiSlice";
import {useSelector} from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function BarberTeam() {
    const [visible, setVisible] = useState(false);

    let { userInfo } = useSelector(state => state.auth);
    let {data: res, isLoading, error } = useInfosQuery({token: userInfo.token});

    return (
        <React.Fragment>
            <LoadingSpinner isLoading={isLoading}/>
            <NavBar/>
            <PageHeader title="Your Team"/>

            <div className="container gym-feature py-5">
                <div className="tab-class">
                    <div
                        className="container-fluid bg-primary mb-5 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                            padding: 35,
                            visibility: "visible",
                            animationDelay: "0.1s",
                            animationName: "fadeIn"
                        }}
                    >
                        <div className="container">
                            <div className="row g-2">
                                <div className="col-md-10">
                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Keyword"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-dark border-0 w-100" onClick={() => setVisible(!visible)}>Add</button>
                                    <AddTeamMember onChange={visible=>setVisible(visible)} visible={visible}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        { res?.barberShop?.members.map(member =>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid" src={member.image} alt="" />
                                    <div className="team-social">
                                        <Btn className="btn btn-square" href="">
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </Btn>
                                        <Btn className="btn btn-square" href="">
                                            <i className="fab fa-trash" />
                                        </Btn>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">{`${member.firstName} ${member.lastName}`}</h5>
                                    <span className="text-primary">{member.role != null ? member.role : ''}</span>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>


            <Footer/>
        </React.Fragment>
    );
}

export default BarberTeam;