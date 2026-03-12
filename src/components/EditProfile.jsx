import React, { useState } from "react";
import UserCard from "./UserCard";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age: Number(age), gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      label: "First Name",
      type: "text",
      value: firstName,
      placeholder: "Jane",
      onChange: (e) => setFirstName(e.target.value),
      autoComplete: "given-name",
    },
    {
      label: "Last Name",
      type: "text",
      value: lastName,
      placeholder: "Doe",
      onChange: (e) => setLastName(e.target.value),
      autoComplete: "family-name",
    },
    {
      label: "Photo URL",
      type: "url",
      value: photoUrl,
      placeholder: "https://example.com/photo.jpg",
      onChange: (e) => setPhotoUrl(e.target.value),
    },
    {
      label: "Age",
      type: "number",
      value: age,
      placeholder: "25",
      onChange: (e) => setAge(e.target.value ? parseInt(e.target.value, 10) : ""),
    },
    {
      label: "Gender",
      type: "text",
      value: gender,
      placeholder: "e.g. Male / Female / Non-binary",
      onChange: (e) => setGender(e.target.value),
    },
  ];

  return (
    <>
      {/* Page wrapper */}
      <div className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">

          {/* ── Form Card ── */}
          <div className="w-full lg:max-w-md">
            <div className="card bg-base-100 shadow-2xl rounded-2xl">
              <div className="card-body p-6 sm:p-8">

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-6 rounded-full bg-primary" />
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                      Edit Profile
                    </h2>
                  </div>
                  <p className="text-sm text-base-content/45 pl-4">
                    Update your personal information below
                  </p>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-4">

                  {/* First & Last Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fields.slice(0, 2).map(({ label, type, value, placeholder, onChange, autoComplete }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-base-content/45">
                          {label}
                        </label>
                        <input
                          type={type}
                          value={value}
                          placeholder={placeholder}
                          autoComplete={autoComplete}
                          className="input input-bordered w-full focus:input-primary transition-all duration-200 text-sm"
                          onChange={onChange}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Remaining fields */}
                  {fields.slice(2).map(({ label, type, value, placeholder, onChange }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <label className="text-xs font-semibold uppercase tracking-widest text-base-content/45">
                        {label}
                      </label>
                      <input
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        className="input input-bordered w-full focus:input-primary transition-all duration-200 text-sm"
                        onChange={onChange}
                      />
                    </div>
                  ))}

                  {/* About — textarea */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-base-content/45">
                      About
                    </label>
                    <textarea
                      value={about}
                      placeholder="Write a short bio about yourself…"
                      rows={3}
                      className="textarea textarea-bordered w-full focus:textarea-primary transition-all duration-200 text-sm resize-none"
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="alert alert-error mt-4 py-3 px-4 text-sm rounded-xl flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-6">
                  <button
                    onClick={saveProfile}
                    disabled={loading}
                    className="btn btn-primary w-full tracking-wide text-sm sm:text-base"
                  >
                    {loading && <span className="loading loading-spinner loading-sm" />}
                    {loading ? "Saving…" : "Save Profile"}
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* ── Live Preview Card ── */}
          <div className="w-full lg:flex-1 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-base-content/35">
              Live Preview
            </p>
            <UserCard
              user={{ firstName, lastName, photoUrl, age, gender, about }}
            />
          </div>

        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Profile updated successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;