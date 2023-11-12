import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import FeedBacks from "../../components/FeedBacks";
import BarberShopTeam from "../../components/BarberShopTeam";
import BarberServices from "../../components/BarberServices";
import { useNavigate, useParams } from "react-router-dom";
import BookAppointment from "../../components/BookAppointment";
import { useSelector } from "react-redux";
import { useGetInfosForPublicQuery } from "../../redux/slices/barberApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

function BarberShops() {
  const [visible, setVisible] = useState(false);

  let { userInfo } = useSelector((state) => state.auth);

  const { id } = useParams();

  let { data: res, isLoading } = useGetInfosForPublicQuery({
    id,
    token: userInfo.token,
  });

  const navigate = useNavigate();

  const openBookAppointment = () => {
    if (userInfo.role === "CUSTOMER") {
      navigate("/login");
    } else {
      setVisible(true);
    }
  };

  if(isLoading){
      return <LoadingSpinner isLoading={isLoading} />;
  }

  console.log(res);

  return (
    <React.Fragment>
      <NavBar />
      <div
        className="container-fluid page-header py-5 mb-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
            {res?.barberShop ? res?.barberShop.name : ""}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            {res?.barberShop !== undefined ? (
              <div className="breadcrumb justify-content-center text-uppercase mb-0">
                <button
                  className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
                  onClick={() => openBookAppointment()}
                >
                  Appointment
                  <i className="fa fa-arrow-right ms-3" />
                </button>
                <BookAppointment
                  barber={res?.barberShop}
                  onChange={(visible) => setVisible(visible)}
                  visible={visible}
                />
              </div>
            ) : (
              ""
            )}
          </nav>
        </div>
      </div>
      {res?.barberShop ? <AboutUs barber={res?.barberShop} /> : ""}
      <BarberShopTeam />
      {res?.barberShop ? <BarberServices services={res?.barberShop.services} /> : ""}
      <FeedBacks />
      <Footer />
    </React.Fragment>
  );
}

export default BarberShops;
