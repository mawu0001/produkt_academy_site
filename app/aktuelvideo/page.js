import Image from "next/image";
import Link from "next/link";

const Videopage = () => {
  return (
    <main>
      <section>
        <h1> Hvad er carbonstål</h1>
        <div className="flex place-content-between">
          <h4>← Forrige video</h4>
          <h4>Næste video →</h4>
        </div>
        <Image
          src="/img/video_ph.png"
          width={1280}
          height={720}
          alt="Thumbnail"
        />
        {/* map andre videoer */}
        <h4>Pleje</h4>
        <Image
          src="/img/video_ph.png"
          width={460}
          height={280}
          alt="Thumbnail"
          className="cursor-pointer aspect-auto w-80 h-auto"
        />
      </section>
    </main>
  );
};

export default Videopage;
