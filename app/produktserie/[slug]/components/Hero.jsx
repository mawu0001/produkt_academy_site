"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = ({ titel, youtubeUrl, onChangeVideo, videoCount }) => {
  return (
    <div className="hero-container mt-8">
      <div className="flex justify-between mb-4">
        {videoCount > 1 && (
          <div
            className="arrow left-arrow cursor-pointer text-3xl"
            onClick={() => onChangeVideo("left")}
          >
            <span className="flex place-items-center">
              {/* <IoIosArrowBack />  */}
              <h4> &larr; Forrige video</h4>
            </span>
          </div>
        )}
        <h4 className="">{titel}</h4>
        {videoCount > 1 && (
          <div
            className="arrow right-arrow cursor-pointer text-3xl"
            onClick={() => onChangeVideo("right")}
          >
            <span className="flex place-items-center">
              <h4>Næste video &rarr;</h4>

              {/* <IoIosArrowForward /> */}
            </span>
          </div>
        )}
      </div>

      <iframe
        width="100%"
        height="560"
        src={youtubeUrl}
        title={titel}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Hero;
