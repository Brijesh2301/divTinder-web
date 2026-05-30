import React from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Premium = () => {
  const handleBuyClick = async (type) => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        { membershipType: type },
        { withCredentials: true },
      );
      console.log("order.data:", order.data);
   const { amount, keyId, currency, notes, orderId } = order.data; // ✅ capital I

      // Define options BEFORE using them
      const options = {
        key: keyId,
        amount,
        currency,
        name: "Dev Tinder",
        description: "Connect to other developers",
        image: "https://example.com/your_logo",
        order_id: orderId,

        handler: async function (response) {
          // Called by Razorpay after successful payment
          try {
            await axios.post(
              BASE_URL + "/payment/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { withCredentials: true },
            );
            alert("Payment successful! Membership activated.");
          } catch (err) {
            console.error("Payment verification failed:", err);
            alert("Payment verification failed. Please contact support.");
          }
        },

        prefill: {
          name: notes.firstName + " " + notes.lastName,
          email: notes.emailId,
          contact: "+919876543210",
        },
        notes: {
          address: "Dev Tinder office Noida, U.P",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // ✅ Razorpay instance created AFTER options is defined
      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert("Payment failed: " + response.error.description);
      });

      rzp.open();
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Could not initiate payment. Please try again.");
    }
  };

  return (
    <>
      <div className="m-10">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="font-bold text-3xl">Silver Membership</h1>
            <ul>
              <li>- Chat with other people</li>
              <li>- 100 connection requests per day</li>
              <li>- Blue Tick</li>
              <li>- 3 months</li>
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
              <li>- Chat with other people</li>
              <li>- 1000 connection requests per day</li>
              <li>- Blue Tick</li>
              <li>- 6 months</li>
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
