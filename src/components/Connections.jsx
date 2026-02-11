import axios from "axios";
import React, { useEffect } from "react";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log("Fetched connections:", res.data.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-3xl">Connections</h1>
      {connections.map((connection) => {
        const {_id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div key={_id} className=" m-4 p-4 flex rounded-md bg-base-300 w-1/2 mx-auto ">
            <div className="div">
              {" "}
              <img
                className="w-20 h-20 rounded-full "
                src={photoUrl}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-left mx-4">
              {" "}
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
