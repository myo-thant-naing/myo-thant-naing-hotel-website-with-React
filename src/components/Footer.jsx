import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className=" bg-primary p-4 text-center mt-20">
        <div className="grid md:grid-cols-3">
          <div className=" space-y-2">
            <h2 className="text-secondary text-xl ">Address</h2>
            <Link
              to={
                "https://www.google.com/maps/place/Bagan+Thiripyitsaya+Sanctuary+Resort/@21.1642905,94.8512911,17z/data=!3m1!4b1!4m9!3m8!1s0x30b5e4f8c9ed60b1:0x71faa3a3102aef0a!5m2!4m1!1i2!8m2!3d21.1642855!4d94.853866!16s%2Fg%2F1xc60l0n?hl=en&entry=ttu"
              }
            >
              <div className="flex justify-center text-white space-x-5">
                <img
                  src="src/assets/images/marker.png"
                  alt=""
                  className="w-6 h-6 mt-1"
                />
                <span className="max-w-60 text-start">
                  Bagan Archeological Zone, Old Bagan Mandalay Division, Myanmar
                </span>
              </div>
            </Link>
            <div className="flex justify-center text-white space-x-5">
              <img
                src="src/assets/images/apple-phone.png"
                alt=""
                className="w-6 h-6 mt-1"
              />
              <span className="min-w-60 text-start mt-1">
                09-940111400, 09-940111500
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-secondary text-xl ">Contact</h2>
            <div className="flex justify-center space-x-5">
              <img
                src="src/assets/images/facebook-new.png"
                alt=""
                className="w-6 h-6 mt-1"
              />
              <img
                src="src/assets/images/viber--v1.png"
                alt=""
                className="w-6 h-6 mt-1"
              />
              <img
                src="src/assets/images/telegram.png"
                alt=""
                className="w-6 h-6 mt-1"
              />
            </div>
          </div>
          <div className="text-white mt-7  underline">
            <h3>Terms & Condition</h3>
            <Link to={"/contact"}>
              <h3>Contact Us</h3>
            </Link>
          </div>
        </div>

        <hr className="my-3" />
        <span className="text-gray-200  text-sm">
          Copyright © 2024 Design & Developed by Group II & Content from Bagan
          Thiripyitsaya resort
        </span>
      </footer>
    </div>
  );
}
