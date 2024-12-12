import React from "react";
import data from "../assets/data/db.json";

export default function Receipt({ form, onEdit, onPayment }) {
  return (
    <>
      {/* Receipt Section */}
      <h2 className="text-3xl text-secondary text-center font-semibold">
        Booking Receipt
      </h2>
      <div className="border border-gray-300 rounded-lg p-5 space-y-3">
        {Object.entries(form).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="font-semibold capitalize">{key}:</span>
            <span>{value || "N/A"}</span>
          </div>
        ))}
        <div className="flex justify-between">
          <span className="font-semibold capitalize">Room Type:</span>
          <span>{data.rooms[form.roomId].title}</span>
        </div>
        <br />
        <br />
        <div className="text-center font-bold">
          Total cost : {data.rooms[form.roomId].price * form.RoomCount} ks
        </div>
      </div>

      <div className="flex justify-center gap-5">
        {" "}
        <button
          onClick={onEdit}
          className=" hover:text-white hover:border-0 border-[1px] border-black py-2 px-5 rounded-lg hover:bg-secondary transition duration-300"
        >
          Edit
        </button>
        <button
          className="bg-secondary text-white py-2 px-5 rounded-lg hover:bg-secondary-dark transition duration-300"
          onClick={onPayment}
        >
          Payment
        </button>{" "}
      </div>
    </>
  );
}
