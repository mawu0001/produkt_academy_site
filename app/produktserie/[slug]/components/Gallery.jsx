"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import Video from "./Video";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv"; // Updated URL

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => setData(result.data),
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  // ✅ Filter videos where category === "carbon"
  const carbonVideos = data.filter(
    (row) => row.kategori?.toLowerCase() === "carbon"
  );

  return (
    <div>
      {carbonVideos.length > 0 ? (
        <div className="flex flex-wrap gap-y-8 place-content-between">
          {carbonVideos.map((row, index) => (
            <Video
              key={index}
              image={row.thumbnail}
              titel={row.titel}
              youtubeUrl={row.video.replace(/['"]+/g, "")}
            />
          ))}
        </div>
      ) : (
        <p>No videos found for the category "carbon".</p>
      )}
    </div>
  );
};

export default Gallery;
