import React from "react";
import Banner from "../components/Banner";
import SPA from "../components/SPA";
import Dinning from "../components/Dinning";
import SwimmingPool from "../components/SwimmingPool";
export default function Service() {
  return (
    <div className="space-y-20">
      <Banner
        src="/assets/images/room-banner.jpg"
        alt="Service banner"
        height="h-72"
        title="Our Service"
        text="Enjoy exceptional hospitality with services designed to make your stay seamless and memorable."
      />
      <SPA />
      <Dinning />
      <SwimmingPool />
    </div>
  );
}
