import React from "react";

export default function SwimmingPool() {
  return (
    <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
      <div className="space-y-3 p-10">
        <h2 className="text-secondary  text-2xl ">Swimming Pool</h2>
        <hr className="bg-gray-400 h-[2px]  " />
        <p>
          To soothe the body and mind, one can find relief and comfort by
          choosing from several treatments at the Thiripyitsaya Spa. A menu of
          Massages, Body Treatments, Wraps and Scrubs, Facials, as well as
          multi-course full Spa programs is offered by skilled and well-trained
          Spa therapists.
        </p>
      </div>
      <img src="/assets/images/swimming-pool.jpg" alt="" className="w-full" />
    </div>
  );
}
