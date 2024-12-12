import React from "react";
import { Link } from "react-router-dom";
import GalleryImg from "../components/GalleryImg";
import data from "../assets/data/db.json";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div className="space-y-20">
      <Banner
        src="src/assets/images/general-banner.jpg"
        alt="Dining Banner"
        height="h-72"
        title="About Thiripyitsaya"
        text="Explore the legacy, charm, and hospitality of our luxurious resort."
      />
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-8">
        <div className="space-y-3 px-10">
          <h2 className="text-secondary text-2xl">History of Thiripyitsaya</h2>
          <hr className="bg-gray-400 h-[2px]" />
          <p>
            Bagan Thiripyitsaya Sanctuary Resort was established 30 years ago as
            the Government’s guesthouse for elite visitors. In 1996, it was
            taken over by Japanese investors and managers and has since then
            undergone extensive renovation, upgrading, and expansion. The Resort
            has been host to international political and business leaders and
            celebrities, and is considered to be Bagan’s foremost hotel.
          </p>
        </div>
        <img
          src="src/assets/images/about.jpg"
          alt="History of Thiripyitsaya"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Map Section */}
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-8">
        <img
          src="src/assets/images/thiripyitsaya-map2.jpg"
          alt="Resort Map"
          className="w-96 mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-3 flex flex-col items-center justify-center">
          <h2 className="text-secondary text-center text-2xl">
            MAP OF OUR RESORT
          </h2>
          <p>
            View the locations of our different accommodations and facilities.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-8">
        <div className="space-y-3 mt-10 px-10">
          <h2 className="text-secondary text-2xl">Hotel Gallery</h2>
          <hr className="bg-gray-400 h-[2px]" />
          <p>
            Indulge in a visual journey through our enchanting hotel. Discover
            the allure of our meticulously designed rooms, the elegance of our
            facilities, and the charm of our surroundings. Our gallery captures
            the essence of our hospitality, offering a glimpse into the
            luxurious experience awaiting you.
          </p>
          <Link to="/gallery">
            <button className="mt-10 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90">
              See More
            </button>
          </Link>
        </div>
        <div className="space-y-3 p-4">
          {Array.from({ length: data.imageGroups[0].length / 2 }).map(
            (_, rowIndex) => (
              <div key={rowIndex} className="grid md:grid-cols-2 gap-4">
                {data.imageGroups[0]
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((src, index) => (
                    <GalleryImg
                      key={index}
                      src={src}
                      alt={`Gallery Image ${index + 1}`}
                      className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
