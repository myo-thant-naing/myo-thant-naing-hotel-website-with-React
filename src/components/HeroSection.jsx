import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center pt-20"
      style={{ backgroundImage: `url("/assets/images/slide3.jpg")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          Welcome to Thiripyitsaya
        </h1>
        <p className="text-lg max-w-md">
          Experience the perfect blend of comfort and luxury in our serene
          accommodations.
        </p>
        <a href="#room_section">
          <button className="bg-secondary px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
            Explore More
          </button>
        </a>
      </div>
    </div>
  );
}
