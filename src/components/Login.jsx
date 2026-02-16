import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants.js";

const Login = () => {
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [isLogingForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true },
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      setError(
        error?.response?.data.message || "Login failed. Please try again.",
      );
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
    c
  };

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {isLogingForm ? "Login" : "Signup"}
            </h2>
            <div>
              {!isLogingForm && (
                <>
                  <label className="form-control w-full max-w-xs my-2">
                    <div className="label py-4">
                      <span className="label-text"> FirstName</span>
                    </div>
                    <input
                      type="text"
                      value={firstName}
                      className=" input input-bordered w-full max-w-xs "
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label className="form-control w-full max-w-xs my-2">
                    <div className="label py-4">
                      <span className="label-text">Last Name</span>
                    </div>
                    <input
                      type="text"
                      value={lastName}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </>
              )}
              <label className="form-control w-full max-w-xs my-2">
                <div className="label py-4">
                  <span className="label-text"> Email ID</span>
                </div>
                <input
                  type="text"
                  value={emailId}
                  className=" input input-bordered w-full max-w-xs "
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label py-4">
                  <span className="label-text"> Password</span>
                </div>
                <input
                  type="text"
                  value={password}
                  className=" input input-bordered w-full max-w-xs "
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500">{error} </p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={isLogingForm ? handleLogin : handleSignUp}
              >
                {isLogingForm ? "Login" : "SignUp"}
              </button>
            </div>
            <p
              className="flex justify-center cursor-pointer py-2"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              {isLogingForm
                ? "New User ? Signup here"
                : "Existing User? ? Login here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
