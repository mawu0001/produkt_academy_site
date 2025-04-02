import Image from "next/image";

const Brandpage = () => {
  return (
    <main>
      <section>
        <h1>Gastrotools Brand & Mission</h1>
        <Image
          src="/img/brand_tn.webp"
          width={1280}
          height={720}
          alt="Thumbnail"
          className="rounded-lg"
        />
        <p>
          Vi er på en mission om at give hjemmekokke værktøjerne til bedre
          madlavning. Både i form af køkkenværktøjer i professionel kvalitet,
          men også gennem det omfattende Gastro Studio med masser af læring,
          underholdning og inspiration til bedre madlavning. Vi er glade for, at
          du vil lave mad med os. <br /> <br />- Julius, Anton & Magnus
        </p>
      </section>
    </main>
  );
};

export default Brandpage;
