import React from "react";

export default function Bungalow() {
  return (
    <div className="grid md:grid-cols-2 max-w-6xl p-4">
      <div className="text-center mt-10 space-y-3">
        <h2 className="text-secondary text-2xl ">Bungalow</h2>
        <p>
          Rooms at the bungalows with views of the river or landscaped gardens
        </p>
      </div>
      <img src="/assets/images/bungalow.jpg" alt="" className="w-full h-4/5" />
    </div>
  );
}
