import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/db.json";

export default function RoomCard({ room }) {
  const [currentImg, setCurrentImg] = useState(room.img1);

  return (
    <div className="grid md:grid-cols-2 border-2 shadow-lg p-4 rounded-lg mx-auto max-w-6xl space-y-4 md:space-y-0">
      {/* Image Section */}
      <div>
        <img src={currentImg} alt="Room" className="w-full rounded-md" />
        <div className="flex flex-wrap gap-2 mt-2">
          {[room.img1, room.img2, room.img3, room.img4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-28 cursor-pointer rounded-md border-2 ${
                currentImg === img ? "border-secondary" : "border-transparent"
              }`}
              onClick={() => setCurrentImg(img)}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 space-y-5">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">{room.title}</h2>
          <p className="text-2xl font-bold text-secondary">~{room.price}ks</p>
        </div>

        {/* Description */}
        <p className="text-gray-600">{room.description}</p>

        {/* Facilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.facilities.map((facility) => (
            <div key={facility.id} className="flex flex-col items-center">
              <img
                src={facility.img}
                alt={facility.title}
                className="w-10 h-10"
              />
              <span className="text-sm text-center mt-2">{facility.title}</span>
            </div>
          ))}
        </div>

        {/* Booking Button */}
        <div className="flex justify-end">
          <Link to="/booking">
            <button className="mt-10 border border-black px-4 py-2 rounded-md transition duration-300 hover:bg-secondary hover:text-white hover:border-secondary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
