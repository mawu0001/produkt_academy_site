import Image from "next/image";

const Brandpage = () => {
  return (
    <main>
      <section>
        <h1>Gastrotools Brand & Mission</h1>
        <video width="970" controls>
          <source src="/sequencen_1.mp4" type="video/mp4" />
        </video>
        {/* <iframe
          width="970"
          height="547"
          src="https://www.youtube.com/embed/wjGT5h1FPIA?si=xh1f0kEPSk-2eYHI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        /> */}
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
