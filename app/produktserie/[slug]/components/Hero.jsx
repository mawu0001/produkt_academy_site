import Image from "next/image";

const Hero = ({ titel, description }) => {
  return (
    <div>
      <h1>{titel}</h1>
      <Image
        src="/img/carbon_hero.png"
        width={1280}
        height={720}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <p>{description}</p>
    </div>
  );
};

export default Hero;
