import React from "react";
import data from "../assets/data/db.json";
import RoomCard from "../components/RoomCard";
import CustomerReview from "../components/CustomerReview";
import Bungalow from "../components/Bungalow";
import Video from "../components/Video";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <div id="room_section">
        <RoomCard room={data.rooms[0]} />
      </div>
      <Bungalow />
      <Video />
      <CustomerReview />
    </div>
  );
}
