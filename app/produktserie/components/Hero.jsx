import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <h1> xxx Carbonstål</h1>
      <Image
        src="/img/carbon_hero.png"
        width={1280}
        height={720}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <p>
        Carbonstål - også kendt som pladejern, jern, kulstål og kulstofstål - er
        et fantastisk materiale til stegepander. <br />
        <br /> Gennem en periode, har carbonstålpander været glemt til fordel
        for moderne non-stick pander, men i dag begynder flere at få øjnene op
        for materialet, når de skal vælge ny stegepande - jernpander er nemlig
        helt fantastiske og opbygger sin egen naturlige nonstick fri for
        kemikalier.
      </p>
    </div>
  );
};

export default Hero;
