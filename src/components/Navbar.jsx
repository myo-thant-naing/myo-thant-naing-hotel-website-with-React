import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      {
        nav && nav.classList.add("Nav-hidden");
      }
    } else {
      {
        nav && nav.classList.remove("Nav-hidden");
      }
    }
    lastScrollY = window.scrollY;
  });
  return (
    <div>
      <nav className="bg-primary border-b-2 shadow-lg navbar fixed w-full z-50">
        <div className="flex  justify-between items-center p-3 max-w-5xl h-20  mx-auto">
          <div className="flex items-end gap-2">
            <img src={logo} alt="" className="mb-1" />
            <span className="text-secondary font-bold text-2xl">
              Thiripyitsaya
            </span>
          </div>

          {/* Hotdog menu */}
          <div
            className="lg:hidden cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              {/* Top Line */}
              <span
                className={`absolute h-0.5 w-6 bg-secondary transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.5" : "top-0"
                }`}
              ></span>
              {/* Middle Line */}
              <span
                className={`absolute h-0.5 w-4 bg-secondary transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : "top-2.5"
                }`}
              ></span>
              {/* Bottom Line */}
              <span
                className={`absolute h-0.5 w-6 bg-secondary transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.5" : "top-5"
                }`}
              ></span>
            </div>
          </div>

          <ul
            className={`absolute font-semibold lg:relative lg:flex lg:space-x-6 top-16 left-0 w-full lg:w-auto lg:top-0 lg:bg-transparent bg-primary text-white transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className="p-4 lg:p-0">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className="p-4 lg:p-0">
              <NavLink to={"/rooms"}>Room</NavLink>
            </li>
            <li className="p-4 lg:p-0">
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li className="p-4 lg:p-0">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="p-4 lg:p-0">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className="p-4 lg:hidden ">
              <NavLink to={"/booking"}>Booking</NavLink>
            </li>
          </ul>
          <Link to={"/booking"} className="hidden lg:block">
            <div className="flex justify-center gap-2 items-center">
              <img
                src="src/assets/images/icons8-booking-64.png"
                alt=""
                className="w-8"
              />
              <h2 className="text-secondary text-lg">Booking Now</h2>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
