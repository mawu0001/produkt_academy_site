"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Papa from "papaparse";
import Video from "./components/Video"; // Update path if needed
import Hero from "./components/Hero";

export default function ProductSeriesPage() {
  const { slug } = useParams();
  const [data, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        setFilteredData(
          data.filter((row) => row.slug?.toLowerCase() === slug.toLowerCase())
        );
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <section>
        <div>
          {/* <h1>{data[0]?.herotitel}</h1> */}
          <Hero titel={data[0]?.herotitel} description={data[0]?.description} />
          <div className="grid grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index}>
                <h3>{item.titel}</h3>
                <Video youtubeUrl={item.video} titel={item.titel} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// // app/produktserie/[slug]/page.js

// import Papa from "papaparse";
// import Hero from "./components/Hero";
// import Video from "./components/Video";

// // Server Component
// export default async function ProductSeriesPage({ params }) {
//   const { slug } = params;

//   // Fetch the CSV data
//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

//   // Fetch the CSV file
//   const response = await fetch(csvUrl);
//   const csvText = await response.text();

//   // Parse the CSV data
//   const { data } = Papa.parse(csvText, {
//     header: true,
//     skipEmptyLines: true,
//   });

//   // Filter the data based on the slug
//   const filteredData = data.filter(
//     (row) => row.slug && row.slug.toLowerCase() === slug.toLowerCase()
//   );

//   // Check if we have matching rows and extract the title from the first matching row
//   const title =
//     filteredData.length > 0 ? filteredData[0].herotitel : "Product Series";

//   return (
//     <main>
//       <section>
//         {/* Display the title from the 'titel' column of the first filtered row */}
//         <h1>{title} </h1>
//         <Hero />
//         <div className="grid grid-cols-3 gap-4">
//           {filteredData.length > 0 ? (
//             filteredData.map((item, index) => (
//               <div key={index}>
//                 <h3>{item.titel}</h3>
//                 <Video
//                   image={item.thumbnail}
//                   titel={item.titel}
//                   youtubeUrl={item.youtubeUrl}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No products found in this category.</p>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }
