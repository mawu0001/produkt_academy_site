"use client";

import Image from "next/image";
import Link from "next/link";

const Thumbnail = ({ image, slug, titel }) => {
  return (
    <Link href={`/produktserie/${slug}`}>
      <h4>{titel}</h4>
      <Image
        src={image}
        width={300}
        height={160}
        alt={"Thumbnail"}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Thumbnail;
