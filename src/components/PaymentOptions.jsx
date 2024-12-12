import data from "../assets/data/db.json";
import React, { useState } from "react";

export default function PaymentOptions({ onCancel }) {
  const [isConfirm, setConfirm] = useState(false);
  return (
    <>
      {/* Receipt Section */}
      <h2 className="text-3xl text-secondary text-center font-semibold">
        Choose a Payment
      </h2>
      <div className="border border-gray-300 rounded-lg p-5 space-y-3">
        <div className="flex flex-wrap justify-center gap-10">
          {data.payments.map((payment) => (
            <img src={payment} alt="" className="w-10 opacity-30" />
          ))}
        </div>
        <br />
        <br />
        <p className="text-center text-red-500 text-xs italic">
          *Online payment is not available now.Click the Confirm buttom and we
          will call you soon.
        </p>
      </div>
      {!isConfirm && (
        <div className="flex justify-center gap-5">
          {" "}
          <button
            onClick={onCancel}
            className=" hover:text-white hover:border-0 border-[1px] border-black py-2 px-5 rounded-lg hover:bg-secondary transition duration-300"
          >
            Cancel
          </button>
          <button
            className="bg-secondary text-white py-2 px-5 rounded-lg hover:bg-secondary-dark transition duration-300"
            onClick={() => setConfirm(true)}
          >
            Confirm
          </button>{" "}
        </div>
      )}
      {isConfirm && (
        <p className="text-center  text-secondary">
          We will call you soon.Thank for your patient!
        </p>
      )}
    </>
  );
}
