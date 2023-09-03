import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import BarberCard from "../components/BarberCard";
import Footer from "../components/Footer";

function BarberAppointments() {
    return (
        <React.Fragment>
            <NavBar/>
            <PageHeader title="Appointments"/>

            <div className="container gym-feature py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Class Timetable</h4>
                    <h4 className="display-4 font-weight-bold">Working Hours and Class Time</h4>
                </div>
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
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Keyword"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-select border-0">
                                                <option selected="">Category</option>
                                                <option value={1}>Category 1</option>
                                                <option value={2}>Category 2</option>
                                                <option value={3}>Category 3</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-select border-0">
                                                <option selected="">Location</option>
                                                <option value={1}>Location 1</option>
                                                <option value={2}>Location 2</option>
                                                <option value={3}>Location 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-dark border-0 w-100">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div
                            id="class-powerlifting"
                            className="container tab-pane fade p-0 active show"
                        >
                            <div className="table-responsive">
                                <table className="table table-bordered table-lg m-0">
                                    <thead className="bg-secondary text-white text-center">
                                    <tr>
                                        <th>Time</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    <tr>
                                        <th className="bg-secondary text-white align-middle">
                                            <div className="d-flex align-items-center">
                                                <div className="position-relative">
                                                    <img
                                                        className="rounded-circle"
                                                        src="img/user.jpg"
                                                        alt=""
                                                        style={{ width: 40, height: 40 }}
                                                    />
                                                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0">Jhon Doe</h6>
                                                    <span>Admin</span>
                                                </div>
                                            </div>

                                        </th>
                                        <td>
                                            <h5>Cardio</h5>John Deo
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Crossfit</h5>Adam Phillips
                                        </td>
                                        <td />
                                        <td className="bg-primary text-white">
                                            <h5 className="text-white">Power Lifting</h5>James Alien
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Cardio</h5>John Deo
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-secondary text-white align-middle">
                                            10.00am - 12.00am
                                        </th>
                                        <td />
                                        <td className="bg-primary text-white">
                                            <h5 className="text-white">Power Lifting</h5>James Alien
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Cardio</h5>John Deo
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Crossfit</h5>Adam Phillips
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <th className="bg-secondary text-white align-middle">
                                            5.00pm - 7.00pm
                                        </th>
                                        <td>
                                            <h5>Crossfit</h5>Adam Phillips
                                        </td>
                                        <td />
                                        <td className="bg-primary text-white">
                                            <h5 className="text-white">Power Lifting</h5>James Alien
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Cardio</h5>John Deo
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Crossfit</h5>Adam Phillips
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-secondary text-white align-middle">
                                            7.00pm - 9.00pm
                                        </th>
                                        <td />
                                        <td>
                                            <h5>Cardio</h5>John Deo
                                        </td>
                                        <td />
                                        <td>
                                            <h5>Crossfit</h5>Adam Phillips
                                        </td>
                                        <td />
                                        <td className="bg-primary text-white">
                                            <h5 className="text-white">Power Lifting</h5>James Alien
                                        </td>
                                        <td />
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </React.Fragment>
    );
}

export default BarberAppointments;