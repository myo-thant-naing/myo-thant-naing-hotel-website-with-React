import React from "react";

export default function Banner({ src, alt, height, title, text }) {
  return (
    <div
      className={`relative ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
        {title && <h1 className="text-4xl font-bold">{title}</h1>}
        {text && <p className="text-lg text-center max-w-md">{text}</p>}
      </div>
    </div>
  );
}
