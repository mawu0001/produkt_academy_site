"use client"; // This is a client-side component

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Papa from "papaparse";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/17Vm4WCy55BX9bNwIeASLcaHRiwWpJitnYwOZ54mZNfY/gviz/tq?tqx=out:csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const uniqueCategories = [
          ...new Set(
            data.map((row) => ({
              slug: row.slug?.trim(),
              title: row.titel?.trim(),
            }))
          ),
        ].filter((row) => row.slug && row.title);

        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  return (
    <header className="mb-16 w-full flex place-items-center place-content-between">
      <Link href="/">
        <Image
          src="/img/gastrotools_logo_horizontal_positive_rgb.png"
          width={160}
          height={90}
          alt="logo"
        />
      </Link>
      <nav className="flex flex-row place-content-between w-2/3">
        <Link href="/brandpage" className="hover:font-bold">
          Brand
        </Link>

        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Link
              key={index}
              href={`/produktserie/${category.slug.toLowerCase()}`}
              className="hover:font-bold"
            >
              {category.title}
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </nav>
    </header>
  );
};

export default Header;

// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="mb-16 w-full flex place-items-center place-content-between ">
//       <Link href="/">
//         <Image
//           src="/img/gastrotools_logo_horizontal_positive_rgb.png"
//           width={160}
//           height={90}
//           alt="logo"
//         />
//       </Link>
//       <nav className="flex flex-row place-content-between w-2/3">
//         <Link href="/brandpage" className="hover:font-bold">
//           Brand
//         </Link>
//         <Link href="/produktserie" className="hover:font-700">
//           Carbonstål
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           5-ply
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           Køkkenknive
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           Bagestål
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           Stegeplade
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           Forklæder
//         </Link>
//         <Link href="/" className="hover:font-bold">
//           Tilbehør
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
