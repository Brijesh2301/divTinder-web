import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import BASE_URL from "../utils/constants";
import axios from "axios";



const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  const handleLogout = async () => {
    try {

      await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true },
      );
    
      dispatch(removeUser());
      return navigate("/login");
      
    } catch (err) {
        console.error("Logout failed", err);
      
    }
  }

  return (
    <>
      <div className="navbar bg-base-300 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Tinder</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control"></div>

          {user && (

            <div className="dropdown dropdown-end mx-5 flex  ">
              <p className="form-control item-center">Welcome {user.firstName}</p>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 p-2 rounded-full">
                  <img
                    alt="Photo"
                    src={user.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
