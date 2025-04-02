import Image from "next/image";
import Link from "next/link";
import CSVReader from "./components/CSVReader.jsx";

export default function Homepage() {
  return (
    <main className="w-full">
      <section className="w-full">
        <h1>Gastrotools Product Academy</h1>
        <div className="flex gap-4 place-items-end">
          <div className="gap-y-4 flex flex-col">
            <Link href="/brandpage">
              <h4 className="text-sm">Brand & Misson → </h4>
            </Link>
            <p className="max-w-prose">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
          <Image src="/img/ph1.png" width={640} height={360} alt="Thumbnail" />
        </div>
        <div className="mt-20">
          <h4> Produkt & Produktserier</h4>
          <CSVReader />
        </div>
      </section>
    </main>
  );
}
