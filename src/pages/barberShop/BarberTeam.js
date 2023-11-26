import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import AddTeamMember from "../../components/AddTeamMember";
import { Button as Btn } from "primereact/button";
import { useInfosQuery } from "../../redux/slices/barberApiSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import validator from "validator";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { useDeleteMemberMutation } from "../../redux/slices/teamApiSlice";
import toast from "react-hot-toast";
import UpdateTeamMember from "../../components/UpdateTeamMember";
import { setMember } from "../../redux/slices/data";

function BarberTeam() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [members, setMembers] = useState([]);

  let { userInfo } = useSelector((state) => state.auth);
  let {
    data: res,
    isLoading,
    isSuccess,
  } = useInfosQuery({ token: userInfo.token });

  React.useEffect(() => {
    if (isSuccess) {
      setMembers(res?.barberShop?.members);
    }
  }, [isSuccess, res]);

  const checkImage = (url) => {
    const verification = validator.isURL(url);
    if (verification) {
      return url.replace("upload/", "upload/w_500,h_600,c_scale/");
    }
    return "https://res.cloudinary.com/dztythssn/image/upload/w_500,h_600,c_scale/v1698589717/hairstyle_vhlg1r.png";
  };
  const [deleteMember] = useDeleteMemberMutation();

  const submitDeleteMember = async (member) => {
    try {
      console.log(member, { id: member.id, token: userInfo.token });
      await deleteMember({ id: member.id, token: userInfo.token }).unwrap();
      toast.success("Staff Member Deleted Successfully!");
    } catch (err) {
      toast.error(err?.data?.message);
      console.error(err);
    }
  };

  const confirm = (event, member) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Do you want to delete ${member.firstName} ${member.lastName} from your staff?`,
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => submitDeleteMember(member),
    });
  };

  const searchFilter = (keySearch) => {
    if (keySearch.trim() !== "") {
      setMembers(
        members.filter(
          (el) =>
            `${el.firstName} ${el.lastName} ${el.title}`.indexOf(keySearch) >
            -1,
        ),
      );
    } else {
      setMembers(res?.barberShop?.members);
    }
  };

  console.log(res);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <PageHeader title="Your Team" />

      <div className="container gym-feature py-5">
        <div className="tab-class">
          <div
            className="container-fluid bg-primary mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              padding: 35,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
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
                        onChange={(e) => searchFilter(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-dark border-0 w-100"
                    onClick={() => setVisible(!visible)}
                  >
                    Add
                  </button>
                  <AddTeamMember
                    onChange={(visible) => setVisible(visible)}
                    visible={visible}
                  />
                </div>
              </div>
            </div>
          </div>
          <UpdateTeamMember
            visible={visibleUpdate}
            onChange={(visibleUpdate) => setVisibleUpdate(visibleUpdate)}
          />
          <div className="row g-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="team-item">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={checkImage(member?.image)}
                      alt=""
                    />
                    <ConfirmPopup />

                    <div className="team-social">
                      <Btn
                        className="btn btn-square"
                        onClick={() => {
                          dispatch(setMember(member));
                          setVisibleUpdate(true);
                        }}
                      >
                        <i className="fa fa-cog" />
                      </Btn>
                      <Btn
                        className="btn btn-square"
                        onClick={(e) => confirm(e, member)}
                      >
                        <i className="fa fa-trash" />
                      </Btn>
                    </div>
                  </div>
                  <div className="bg-secondary text-center p-4">
                    <h6 className="text-uppercase">{`${member?.firstName} ${member?.lastName}`}</h6>
                    <span className="text-primary">
                      {member.title != null ? member?.title : "Barber"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default BarberTeam;
