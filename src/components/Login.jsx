import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants.js";

const Login = () => {
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md">

        {/* Card */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl">
          <div className="card-body p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="card-title text-2xl sm:text-3xl font-bold tracking-tight justify-center">
                {isLoginForm ? "Welcome back" : "Create account"}
              </h2>
              <p className="text-center text-base-content/50 text-sm mt-1">
                {isLoginForm
                  ? "Sign in to continue to your account"
                  : "Fill in your details to get started"}
              </p>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-4">

              {/* First & Last Name (Signup only) */}
              {!isLoginForm && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="form-control w-full">
                    <div className="label pb-1 pt-0">
                      <span className="label-text text-xs font-semibold uppercase tracking-widest text-base-content/50">
                        First Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={firstName}
                      autoComplete="given-name"
                      className="input input-bordered w-full focus:input-primary transition-all duration-200"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>

                  <label className="form-control w-full">
                    <div className="label pb-1 pt-0">
                      <span className="label-text text-xs font-semibold uppercase tracking-widest text-base-content/50">
                        Last Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      autoComplete="family-name"
                      className="input input-bordered w-full focus:input-primary transition-all duration-200"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </div>
              )}

              {/* Email */}
              <label className="form-control w-full">
                <div className="label pb-1 pt-0">
                  <span className="label-text text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Email Address
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={emailId}
                  autoComplete="email"
                  inputMode="email"
                  className="input input-bordered w-full focus:input-primary transition-all duration-200"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>

              {/* Password */}
              <label className="form-control w-full">
                <div className="label pb-1 pt-0">
                  <span className="label-text text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Password
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  autoComplete={isLoginForm ? "current-password" : "new-password"}
                  className="input input-bordered w-full focus:input-primary transition-all duration-200"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error mt-4 py-3 px-4 text-sm rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="card-actions mt-6">
              <button
                className="btn btn-primary w-full text-sm sm:text-base tracking-wide"
                onClick={isLoginForm ? handleLogin : handleSignUp}
                disabled={loading}
              >
                {loading && <span className="loading loading-spinner loading-sm" />}
                {loading ? "Please wait…" : isLoginForm ? "Sign In" : "Create Account"}
              </button>
            </div>

            {/* Divider */}
            <div className="divider text-base-content/30 text-xs mt-4 mb-2">OR</div>

            {/* Toggle Login / Signup */}
            <p className="text-center text-sm text-base-content/50">
              {isLoginForm ? "New here?" : "Already have an account?"}
              <button
                className="ml-1 text-primary font-semibold hover:underline underline-offset-2 transition-all duration-150 cursor-pointer bg-transparent border-none"
                onClick={() => {
                  setIsLoginForm((v) => !v);
                  setError("");
                }}
              >
                {isLoginForm ? "Sign up" : "Log in"}
              </button>
            </p>

          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-base-content/30 mt-6 px-4">
          By continuing, you agree to our{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-base-content/50 transition-colors">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-base-content/50 transition-colors">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;