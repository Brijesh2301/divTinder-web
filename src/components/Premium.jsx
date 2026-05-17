import React from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Premium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        type,
      },
      { withCredentials: true },
    );

    // it should open the razorpay dialog box

    
  };

  return (
    <>
      <div className="m-10">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="font-bold text-3xl">Silver Membership</h1>
            <ul>
              <li>- Chat with other pepole</li>
              <li>- 100 connection Request per day</li>
              <li>Blue Trick</li>
              <li>3 months</li>
            </ul>
            <button
              onClick={() => handleBuyClick("silver")}
              className="btn btn-primary"
            >
              Buy Silver
            </button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="font-bold text-3xl">Gold Membership</h1>
            <ul>
              <li>- Chat with other pepole</li>
              <li>- 1000 connection Request per day</li>
              <li>Blue Trick</li>
              <li>6 months</li>
            </ul>
            <button
              onClick={() => handleBuyClick("gold")}
              className="btn btn-primary"
            >
              Buy Gold
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
