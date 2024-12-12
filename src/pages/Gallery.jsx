import React from "react";
import Banner from "../components/Banner";
import GalleryImg from "../components/GalleryImg";
import data from "../assets/data/db.json";

export default function Gallery() {
  return (
    <div className="space-y-20">
      {/* Reusable Banner */}
      <Banner
        src="src/assets/images/dining-banner.jpg"
        alt="Dining Banner"
        height="h-72"
        title="Explore Our Gallery"
      />

      {/* Image Groups */}
      <div className="space-y-12">
        {data.imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 px-10 lg:px-20"
          >
            {group.map((src, index) => (
              <GalleryImg
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
