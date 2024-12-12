import React from "react";
import data from "../assets/data/db.json";
import GalleryImg from "../components/GalleryImg";
import Banner from "../components/Banner";
export default function Service() {
  return (
    <div className="space-y-20">
      <Banner
        src="src/assets/images/room-banner.jpg"
        alt="Service banner"
        height="h-72"
        title="Our Service"
        text="Enjoy exceptional hospitality with services designed to make your stay seamless and memorable."
      />
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
        <div className="space-y-3 mt-10 p-10">
          <h2 className="text-secondary  text-2xl ">SPA</h2>
          <hr className="bg-gray-400 h-[2px]  " />
          <p>
            To soothe the body and mind, one can find relief and comfort by
            choosing from several treatments at the Thiripyitsaya Spa. A menu of
            Massages, Body Treatments, Wraps and Scrubs, Facials, as well as
            multi-course full Spa programs is offered by skilled and
            well-trained Spa therapists.
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

      {/* dinning */}
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
        <div className="px-10">
          <img
            src="src/assets/images/food-menu.jpg"
            alt=""
            className="w-full"
          />
          <h5 className="mt-3 text-secondary">FOOD MENU</h5>
          <p>
            Various menus, from Myanmar, Asian, Western, to vegetarian as well
            as low-calorie, are available.
          </p>
        </div>
        <div className="space-y-3 p-10">
          <h2 className="text-secondary  text-2xl ">Dinning</h2>
          <hr className="bg-gray-400 h-[2px]  " />
          <p>
            The Bagan Thiripyitsaya Sanctuary Resort is known for its cuisine of
            the highest standard. Only the freshest, safest meats, poultry,
            seafood, vegetables, fruits, and other ingredients are used in food
            preparation. Organic vegetables and herbs are grown in the Resort’s
            own vegetable garden. Strict hygiene is observed in the kitchens;
            all raw food materials are washed and rinsed using only purified
            water.
          </p>
        </div>
      </div>

      {/* swimming pool */}
      <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
        <div className="space-y-3 p-10">
          <h2 className="text-secondary  text-2xl ">Swimming Pool</h2>
          <hr className="bg-gray-400 h-[2px]  " />
          <p>
            To soothe the body and mind, one can find relief and comfort by
            choosing from several treatments at the Thiripyitsaya Spa. A menu of
            Massages, Body Treatments, Wraps and Scrubs, Facials, as well as
            multi-course full Spa programs is offered by skilled and
            well-trained Spa therapists.
          </p>
        </div>
        <img
          src="src/assets/images/swimming-pool.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
