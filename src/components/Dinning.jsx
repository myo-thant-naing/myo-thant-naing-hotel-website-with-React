import React from "react";

export default function Dinning() {
  return (
    <div className="grid md:grid-cols-2 max-w-6xl p-4 gap-3">
      <div className="px-10">
        <img src="/assets/images/food-menu.jpg" alt="" className="w-full" />
        <h5 className="mt-3 text-secondary">FOOD MENU</h5>
        <p>
          Various menus, from Myanmar, Asian, Western, to vegetarian as well as
          low-calorie, are available.
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
          own vegetable garden. Strict hygiene is observed in the kitchens; all
          raw food materials are washed and rinsed using only purified water.
        </p>
      </div>
    </div>
  );
}
