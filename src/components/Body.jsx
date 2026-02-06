import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import BASE_URL from "../utils/constants.js";
import { addUser } from "../utils/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Body = () => {
  const dispatchEvent = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if(userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatchEvent(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }

      console.error("Fetching user failed", err);
    }
  };

  useEffect(() => {
    
      fetchUser();
   
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
