const Brandpage = () => {
  return (
    <main>
      <section className="mb-20">
        <h1>Gastrotools Brand & Mission</h1>
        <p>
          Vi er på en mission om at give hjemmekokke værktøjerne til bedre
          madlavning. Både i form af køkken værktøjer i professionel kvalitet,
          men også gennem det omfattende Gastro Studio med masser af læring,
          underholdning og inspiration til bedre madlavning.. <br /> <br />-
          Julius, Anton & Magnus
        </p>{" "}
        <div className="bg-red-500 text-white p-8 text-xl">
          Hvis du ser rød baggrund, virker Tailwind 🎉
        </div>
        <iframe
          width="100%"
          height="560"
          src="https://www.youtube.com/embed/ltz40Q04UBo?si=fl-TmCLv2TwSSVfw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg mb-20"
        ></iframe>
      </section>
    </main>
  );
};

export default Brandpage;
