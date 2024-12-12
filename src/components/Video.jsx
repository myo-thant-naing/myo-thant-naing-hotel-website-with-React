import React from "react";

export default function Video() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <iframe
        className="rounded-lg md:w-3/5 w-full p-4 mx-auto h-72 shadow-lg"
        src="https://www.youtube.com/embed/W3WKCHubHcI?si=2JdnENmYYT0A_koC?start=20"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p className=" text-center">
        " Thiripyitsaya Sanctuary Resort sits on the banks of the Irrawaddy and
        offers panoramic river views with glorious sunsets "
      </p>
    </div>
  );
}
