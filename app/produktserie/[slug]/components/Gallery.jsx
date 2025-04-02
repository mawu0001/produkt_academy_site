"use client";

import Video from "./Video";

const Gallery = ({ data, onVideoClick, currentVideoIndex }) => {
  if (data.length === 1) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={index === currentVideoIndex ? "opacity-50" : ""}
        >
          <Video
            poster={item.thumbnail}
            titel={item.titel}
            onClick={() => onVideoClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
