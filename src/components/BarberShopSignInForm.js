import React from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useLoginAsBarberMutation } from "../redux/slices/barberApiSlice";
import { setCredentials } from "../redux/slices/auth";

function BarberShopSignInForm() {
  let navigate = useNavigate();

  const [data, setData] = React.useState({});

  const dispatch = useDispatch();
  const [loginAsBarber, { isLoading }] = useLoginAsBarberMutation();

  const change = (index, value) => {
    if (value === "") {
      let user = data;
      delete user[index];
      setData(user);
    } else {
      let user = { ...data };
      user[index] = value;
      setData(user);
    }
  };

  const submitSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAsBarber(data).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Successfully Accessed");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message);
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-between mb-1">
        <Link to="/" className="">
          <h3 className="text-primary">
            <i className="fa fa-cut me-2" />
            LOOKY
          </h3>
        </Link>
      </div>
      <div className="form-floating mb-2">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => change("email", e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-2">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => change("password", e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-1">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <Link to="">Forgot Password</Link>
      </div>
      <button
        type="submit"
        className="btn-primary py-3 w-100 mb-2"
        onClick={(e) => submitSignIn(e)}
      >
        {isLoading ? <BeatLoader color="#fff" size={10} /> : "Sign In"}
      </button>
      <p className="text-center mb-0">
        Don't have an Account? <Link to="/sign-up/barber">Sign Up</Link>
      </p>
    </React.Fragment>
  );
}

export default BarberShopSignInForm;
