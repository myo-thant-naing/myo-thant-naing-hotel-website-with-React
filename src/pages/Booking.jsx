import React, { useState } from "react";
import Banner from "../components/Banner";
import BookingForm from "../components/BookingForm";
import Receipt from "../components/Receipt";
import PaymentOptions from "../components/PaymentOptions";
export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    checkInDate: "",
    checkOutDate: "",
    Adults: "1",
    children: "0",
    roomId: "1",
    RoomCount: "1",
  });

  const [viewState, setViewState] = useState("bookingForm"); // 'receipt', 'payment', 'confirm'
  const handleSubmit = (e) => {
    e.preventDefault();
    setViewState("receipt");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="space-y-10">
      {/* Banner */}
      <Banner
        src="src/assets/images/room-banner.jpg"
        alt="Room Banner"
        height="h-72"
      />

      <div className="p-10 max-w-4xl mx-auto space-y-10">
        {viewState === "bookingForm" && (
          <BookingForm
            form={form}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}

        {viewState === "receipt" && (
          <Receipt
            form={form}
            onEdit={() => setViewState("bookingForm")}
            onPayment={() => setViewState("payment")}
          />
        )}
        {viewState === "payment" && (
          <PaymentOptions
            form={form}
            onCancel={() => setViewState("receipt")}
          />
        )}
      </div>
    </div>
  );
}
