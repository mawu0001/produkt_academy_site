// app/produktserie/[slug]/page.js

// Fjerner "use client" direktivet
import Papa from "papaparse";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

// Hent statiske params til slug
export async function generateStaticParams() {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

  const response = await fetch(csvUrl);
  const csvText = await response.text();

  const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const slugs = data.map((row) => row.slug);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Metadata funktion der henter data til den specifikke slug
export async function generateMetadata({ params }) {
  const { slug } = params;

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

  const response = await fetch(csvUrl);
  const csvText = await response.text();

  const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const filteredData = data.filter(
    (row) => row.slug?.toLowerCase() === slug.toLowerCase()
  );

  return {
    props: {
      data: filteredData,
    },
  };
}

// Server-side komponent (ingen "use client")
export default function ProductSeriesPage({ data }) {
  if (!data || data.length === 0) return <p>Product not found.</p>;

  return (
    <main>
      <section>
        <h1 className="text-center">{data[0]?.herotitel}</h1>
        <ul className="flex place-content-evenly">
          {data[0]?.tags?.split(",").map((tag, i) => (
            <li key={i}>{tag.trim()}</li>
          ))}
        </ul>
        <p className="text-center">{data[0]?.description1}</p>
        <Hero titel={data[0]?.titel} youtubeUrl={data[0]?.video} />

        <Gallery data={data} />
      </section>
    </main>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Papa from "papaparse";
// import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";

// export default function ProductSeriesPage() {
//   const { slug } = useParams();
//   const [data, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   useEffect(() => {
//     if (!slug) return;

//     const csvUrl =
//       "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

//     fetch(csvUrl)
//       .then((response) => response.text())
//       .then((csvText) => {
//         const { data } = Papa.parse(csvText, {
//           header: true,
//           skipEmptyLines: true,
//         });

//         setFilteredData(
//           data.filter((row) => row.slug?.toLowerCase() === slug.toLowerCase())
//         );
//         setLoading(false);
//       });
//   }, [slug]);

//   const handleVideoChange = (direction) => {
//     setCurrentVideoIndex((prevIndex) => {
//       if (direction === "left") {
//         return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
//       } else {
//         return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
//       }
//     });
//   };

//   const handleVideoSwap = (index) => {
//     setCurrentVideoIndex(index);
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <main>
//       <section>
//         <h1 className="text-center">{data[currentVideoIndex]?.herotitel}</h1>
//         <ul className="flex place-content-evenly">
//           {data[currentVideoIndex]?.tags?.split(",").map((tag, i) => (
//             <li key={i}>{tag.trim()}</li>
//           ))}
//         </ul>
//         <p className="text-center">{data[currentVideoIndex]?.description1}</p>
//         <Hero
//           titel={data[currentVideoIndex]?.titel}
//           youtubeUrl={data[currentVideoIndex]?.video}
//           onChangeVideo={handleVideoChange}
//           videoCount={data.length}
//         />

//         <Gallery
//           data={data}
//           onVideoClick={handleVideoSwap}
//           currentVideoIndex={currentVideoIndex}
//         />
//       </section>
//     </main>
//   );
// }
