"use client";

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
    <header>
      <div className="bg-[#252522] h-9"></div>
      <div className="mb-16 w-full flex place-items-center place-content-between">
        <Link href="/">
          <Image
            src="/img/gastrotools_logo_horizontal_positive_rgb.png"
            width={180}
            height={110}
            alt="logo"
            className="cursor-pointer py-2"
          />
        </Link>
        <nav className="flex flex-row place-content-evenly w-2/3">
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
      </div>
    </header>
  );
};

export default Header;
