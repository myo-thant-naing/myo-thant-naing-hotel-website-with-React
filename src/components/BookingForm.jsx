import React from "react";

export default function BookingForm({ form, handleSubmit, handleInputChange }) {
  return (
    <>
      {/* Booking Section */}
      <div className="flex justify-center items-center gap-3">
        <img
          src="src/assets/images/icons8-booking-64.png"
          alt="Booking Icon"
          className="w-12"
        />
        <h2 className="text-secondary text-3xl font-semibold">Booking Now</h2>
      </div>
      <p className="text-center text-gray-600">
        Warmly welcome to Thiripyitsaya. Take a rest in peace and immerse
        yourself in nature.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Full Name"
            onChange={handleInputChange}
            className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phoneNo"
            value={form.phoneNo}
            placeholder="Phone"
            onChange={handleInputChange}
            className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <span className="text-secondary">Check-in</span>
            <input
              type="date"
              name="checkInDate"
              value={form.checkInDate}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-secondary">Check-out</span>
            <input
              type="date"
              name="checkOutDate"
              value={form.checkOutDate}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <span className="text-secondary">Adults</span>
            <select
              name="Adults"
              value={form.Adults}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-secondary">Children</span>
            <select
              name="children"
              value={form.children}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            >
              <option value="0">0</option>
              <option value="1">1</option>

              <option value="2">2</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <span className="text-secondary">Room Type</span>
            <select
              name="roomId"
              value={form.roomType}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            >
              <option value="1">SAKURA INN</option>
              <option value="2">DELUXE CLASSIC ROOMS</option>
              <option value="3">DELUXE GARDEN VIEW ROOMS</option>
              <option value="4">DELUXE RIVER VIEW ROOMS</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-secondary">Room Count</span>
            <select
              name="RoomCount"
              value={form.RoomCount}
              onChange={handleInputChange}
              className="bg-transparent border-b border-gray-500 py-3 focus:outline-none"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-secondary text-white py-2 px-10 rounded-lg hover:bg-secondary-dark transition duration-300"
          >
            Check
          </button>
        </div>
      </form>
    </>
  );
}
