import React from "react";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import ImageUploader from "./ImageUploader";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { useSelector } from "react-redux";
import { useUpdateMemberMutation } from "../redux/slices/teamApiSlice";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";

function UpdateTeamMember({ visible, onChange }) {
  const [data, setData] = React.useState({});
  const [file, setFile] = React.useState(new FormData());

  let { userInfo } = useSelector((state) => state.auth);
  let { member } = useSelector((state) => state.data);

  const [updateMember, { isLoading }] = useUpdateMemberMutation();

  const submitUpdateMember = async () => {
    try {
      let form = new FormData();
      for (let key of Object.keys(data)) {
        form.append(key, data[key]);
      }
      form.append("image", file.get("image"));
      if (form.get("image") === "null") {
        form.delete("image");
      }
      console.log(form);
      const res = await updateMember({
        id: member.id,
        body: form,
        token: userInfo.token,
      }).unwrap();
      console.log(res);
      toast.success("Service Added Successfully!");
    } catch (err) {
      toast.error(err?.data?.message);
      console.error(err);
    }
  };

  const change = (index, value) => {
    if (value === "" || value === null || value === undefined) {
      let form = data;
      delete form[index];
      setData(form);
    } else {
      let form = { ...data };
      form[index] = value;
      setData(form);
    }
  };

  const confirm = (event, member) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Do you want to update ${member.firstName} ${member.lastName} ?`,
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => submitUpdateMember(),
    });
  };

  return (
    <Sidebar
      position="right"
      header="Add New Team Mate!"
      visible={visible}
      style={{ width: "50vw", background: "#191C24", padding: "none" }}
      onHide={() => onChange(false)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <ImageUploader f={member.image} onChange={(file) => setFile(file)} />
        </div>
        <div className="ml-2 mt-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="form-floating me-1">
              <input
                type="text"
                className="form-control"
                id="floatingText"
                defaultValue={member.firstName}
                onChange={(e) => change("firstName", e.target.value)}
              />
              <label htmlFor="floatingText">First Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingText"
                defaultValue={member.lastName}
                onChange={(e) => change("lastName", e.target.value)}
              />
              <label htmlFor="floatingText">Last Name</label>
            </div>
          </div>
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              defaultValue={member.title}
              placeholder="member role"
              onChange={(e) => change("title", e.target.value)}
            />
            <label htmlFor="floatingInput">Member Role</label>
          </div>
        </div>
      </div>
      <div className="p-inputgroup mb-2">
        <span
          className="p-inputgroup-addon"
          style={{ color: "#fff", background: "#EB1616", border: "none" }}
        >
          <i className="pi pi-facebook" />
        </span>
        <InputText placeholder="Facebook" defaultValue={member.facebook} />
      </div>
      <div className="p-inputgroup mb-2">
        <span
          className="p-inputgroup-addon"
          style={{ color: "#fff", background: "#EB1616", border: "none" }}
        >
          <i className="pi pi-youtube" />
        </span>
        <InputText placeholder="Youtube" defaultValue={member.youtube} />
      </div>
      <div className="p-inputgroup mb-4">
        <span
          className="p-inputgroup-addon"
          style={{ color: "#fff", background: "#EB1616", border: "none" }}
        >
          <i className="pi pi-instagram" />
        </span>
        <InputText placeholder="Instagram" defaultValue={member.instagram} />
      </div>

      <div>
        <button
          type="submit"
          className="btn-primary py-3 w-100 mb-2"
          onClick={(e) => confirm(e, member)}
        >
          {isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit"}
        </button>
      </div>

      <ConfirmPopup />
    </Sidebar>
  );
}

export default UpdateTeamMember;
