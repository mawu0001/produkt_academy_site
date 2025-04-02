"use client";

import Image from "next/image";
import Link from "next/link";

const Thumbnail = ({ image, link }) => {
  return (
    <Link href={"/produktserie"}>
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
