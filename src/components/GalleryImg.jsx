import React from "react";

export default function GalleryImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    />
  );
}
