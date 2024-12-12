import React, { useState } from "react";
import data from "../assets/data/db.json";
import RoomCard from "../components/RoomCard";
import Banner from "../components/Banner";
export default function Room() {
  return (
    <div className="space-y-20">
      <Banner
        src="/assets/images/room-banner.jpg"
        alt="Room Banner"
        height="h-72"
        title="Our Rooms"
        text="Discover comfort and elegance in our thoughtfully designed rooms"
      />
      {data.rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
