import Image from "next/image";
import Link from "next/link";
import CSVReader from "./components/CSVReader.jsx";

export default function Homepage() {
  return (
    <main className="w-full">
      <section className="w-full">
        <h1 className="mb">Gastrotools Product Academy</h1>
        <div className="flex gap-4 place-items-center">
          <div className="gap-y-4 flex flex-col">
            <Link href="/brandpage">
              <h4 className="text-sm">Brand & Misson → </h4>
            </Link>
            <p className="max-w-prose">
              Vi er på en mission om at give hjemmekokke værktøjerne til bedre
              madlavning. Både i form af køkkenværktøjer i professionel
              kvalitet, men også gennem det omfattende Gastro Studio med masser
              af læring, underholdning og inspiration til bedre madlavning. Vi
              er glade for, at du vil lave mad med os.
            </p>
          </div>
          <iframe
            width="400"
            height="220"
            src="https://www.youtube.com/embed/wjGT5h1FPIA?si=xh1f0kEPSk-2eYHI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
        <div className="mt-20">
          <h4> Produkt & Produktserier</h4>
          <CSVReader />
        </div>
      </section>
    </main>
  );
}
