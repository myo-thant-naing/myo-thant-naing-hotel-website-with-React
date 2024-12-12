import React from "react";
import data from "../assets/data/db.json";
export default function CustomerReview() {
  const StarRating = ({ count, src }) => (
    <div className="flex gap-2 justify-center">
      {Array(count)
        .fill(src)
        .map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Star ${index + 1}`}
            className="w-6"
          />
        ))}
    </div>
  );
  return (
    <div>
      <h3 className="text-secondary text-center text-2xl mb-5">
        Customer Reviews
      </h3>
      <div className="grid md:grid-cols-3 gap-3  p-4">
        {data.customers.map((customer) => (
          <div
            className="rounded-md shadow-lg mx-auto w-80  p-4 space-y-3"
            key={customer.id}
          >
            <img src={customer.img} alt="" className="mx-auto rounded-full" />
            <h2 className="text-center font-bold text-xl">{customer.name}</h2>
            <StarRating
              count={customer.stars}
              src="/assets/images/star--v1.png"
            />
            <p className="">{customer.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
