import { useState } from "react";
import Image from "next/image";

const Video = ({ image, titel, youtubeUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <iframe
        width="100%"
        height="250"
        src={youtubeUrl.replace(/['"]+/g, "")}
        title={titel}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Video;
