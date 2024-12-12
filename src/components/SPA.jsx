import React from "react";
import data from "../assets/data/db.json";
import GalleryImg from "../components/GalleryImg";
export default function SPA() {
  return (
    <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
      <div className="space-y-3 mt-10 p-10">
        <h2 className="text-secondary  text-2xl ">SPA</h2>
        <hr className="bg-gray-400 h-[2px]  " />
        <p>
          To soothe the body and mind, one can find relief and comfort by
          choosing from several treatments at the Thiripyitsaya Spa. A menu of
          Massages, Body Treatments, Wraps and Scrubs, Facials, as well as
          multi-course full Spa programs is offered by skilled and well-trained
          Spa therapists.
        </p>
      </div>
      <div className="space-y-3 p-4">
        {Array.from({ length: data.spa.length / 2 }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid md:grid-cols-2 gap-3">
            {data.spa
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((src, index) => (
                <GalleryImg
                  key={index}
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
