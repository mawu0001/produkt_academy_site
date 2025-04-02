"use client";
// import { useState } from "react";
// import Image from "next/image";

const Video = ({ image, titel, youtubeUrl }) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // Ensure youtubeUrl is defined before using .replace()
  const videoSrc = youtubeUrl;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <iframe
        width="100%"
        height="250"
        src={videoSrc}
        title={titel}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Video;
{
  /* <div className="grid grid-cols-3 gap-4">
  {filteredData.length > 0 ? (
    filteredData.map((item, index) => (
      <div key={index}>
        <h3>{item.titel}</h3>
        <img
          src={item.thumbnail
            .replace("file/d/", "uc?id=")
            .replace("/view?usp=sharing", "")}
          alt={item.titel}
        />
      </div>
    ))
  ) : (
    <p>No products found in this category.</p>
  )}
</div>; */
}
