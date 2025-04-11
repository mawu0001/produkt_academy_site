import Image from "next/image";

const Brandpage = () => {
  return (
    <main>
      <section>
        <h1>Gastrotools Brand & Mission</h1>

        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/ltz40Q04UBo?si=fl-TmCLv2TwSSVfw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
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
