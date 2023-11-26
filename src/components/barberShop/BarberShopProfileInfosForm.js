import ImageUploader from "../ImageUploader";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useUpdateBarberInfosMutation,
  useUpdateBarberAvatarMutation,
} from "../../redux/slices/barberApiSlice";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Editor } from "primereact/editor";

function BarberShopProfileInfosForm({ barber }) {
  let navigate = useNavigate();
  const [data, setData] = React.useState({});
  const [file, setFile] = React.useState(new FormData());

  let { userInfo } = useSelector((state) => state.auth);
  const [updateBarberInfos, { isLoading: isLoadingInfos }] =
    useUpdateBarberInfosMutation();
  const [updateBarberAvatar, { isLoading: isLoadingAvatar }] =
    useUpdateBarberAvatarMutation();

  const [text, setText] = useState("");

  const submitUpdate = async (e) => {
    e.preventDefault();
    data.description = text;
    if (data.description === "") {
      data.description = barber.description;
    }
    try {
      let res = {};
      if (Object.keys(data).length > 0) {
        let resInfos = await updateBarberInfos({
          body: data,
          token: userInfo.token,
        }).unwrap();
        toast.success("Barber Infos Updated Successfully!");
        res.resInfos = resInfos;
      }
      if (file.has("image")) {
        console.log(file.get("image"));
        let resAvatar = await updateBarberAvatar({
          body: file,
          token: userInfo.token,
        }).unwrap();
        toast.success("Barber Avatar Updated Successfully!");
        res.resAvatar = resAvatar;
      }
      if (Object.keys(res).length > 0) {
        navigate("/barber-shop/profile");
      }
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

  return (
    <div className="row">
      <div className="col-lg-4 ">
        <ImageUploader f={barber.logo} onChange={(file) => setFile(file)} />
      </div>
      <div className="col-lg-8">
        <div className="form-floating mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Shop Name"
            defaultValue={barber.name}
            onChange={(e) => change("name", e.target.value)}
          />
          <label htmlFor="floatingInput">Shop Name</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            defaultValue={barber.email}
            onChange={(e) => change("email", e.target.value)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Phone"
            defaultValue={barber.phone}
            onChange={(e) => change("phone", e.target.value)}
          />
          <label htmlFor="floatingInput">Phone</label>
        </div>
      </div>
      <div className="form-floating mt-4">
        <Editor
          value={data.description !== undefined ? data.description : ""}
          onTextChange={(e) => setText(e.htmlValue)}
          style={{ height: "120px" }}
        />
      </div>
      <div className="form-floating mt-4">
        <button
          type="submit"
          className="btn-primary py-3 w-100"
          onClick={(e) => submitUpdate(e)}
        >
          {isLoadingInfos || isLoadingAvatar ? (
            <BeatLoader color="#fff" size={10} />
          ) : (
            "Save"
          )}
        </button>
      </div>
    </div>
  );
}

export default BarberShopProfileInfosForm;
