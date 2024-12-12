import React from "react";
import Banner from "../components/Banner";
import data from "../assets/data/db.json";
export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <Banner
        src="/assets/images/general-banner.jpg"
        alt="Contact banner"
        height="h-72"
        title="Our Contact"
      />

      {/* Contact Information */}
      <div className="mt-20 grid md:grid-cols-2">
        <div className="mt-20 space-y-10">
          <h2 className="text-3xl text-secondary text-center">
            Contact Information
          </h2>

          <table className=" mx-auto p-4">
            {data.contactDetails.map((detail, index) => (
              <tr className="space-x-5">
                <td className="w-10 h-10">
                  <img src={detail.icon} alt="" className="w-6 h-6 mt-1" />
                </td>
                <td>
                  <span className="max-w-60">{detail.text}</span>
                </td>
              </tr>
            ))}
          </table>
        </div>

        {/* Contact Form */}
        <div className="p-5">
          <div className="border-secondary border-2 space-y-5 p-10">
            <h2 className="text-2xl">Write to Us</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-gray-500 border-b-[1px] py-3 w-full"
              />
              <div className="grid md:grid-cols-2 gap-10 mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-gray-500 border-b-[1px] py-3"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="bg-transparent border-gray-500 border-b-[1px] py-3"
                />
              </div>
              <div className="flex flex-col mt-5 space-y-2">
                <label htmlFor="message" className="text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here"
                  cols="30"
                  rows="5"
                  className="bg-transparent border-gray-500 border-b-[1px] py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-5 bg-secondary text-white px-6 py-2 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <h2 className="text-secondary text-center my-10 mt-20 text-3xl">
        Our Map
      </h2>
      <iframe
        className="m-0 p-0 w-full h-[50vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.701218672191!2d94.853866!3d21.1642855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b5e4f8c9ed60b1%3A0x71faa3a3102aef0a!2sBagan%20Thiripyitsaya%20Sanctuary%20Resort!5e0!3m2!1sen!2smm!4v1707231894111!5m2!1sen!2smm"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
