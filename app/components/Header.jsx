import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-16 w-full flex place-items-center place-content-between ">
      <Link href="/">
        <Image
          src="/img/gastrotools_logo_horizontal_positive_rgb.png"
          width={160}
          height={90}
          alt="logo"
        />
      </Link>
      <nav className="flex flex-row place-content-between w-2/3">
        <Link href="/brandpage" className="hover:font-bold">
          Brand
        </Link>
        <Link href="/produktserie" className="hover:font-700">
          Carbonstål
        </Link>
        <Link href="/" className="hover:font-bold">
          5-ply
        </Link>
        <Link href="/" className="hover:font-bold">
          Køkkenknive
        </Link>
        <Link href="/" className="hover:font-bold">
          Bagestål
        </Link>
        <Link href="/" className="hover:font-bold">
          Stegeplade
        </Link>
        <Link href="/" className="hover:font-bold">
          Forklæder
        </Link>
        <Link href="/" className="hover:font-bold">
          Tilbehør
        </Link>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <header className="mb-16 w-full">
<nav className="flex place-items-center place-content-between w-full">
  <Image
    src="/img/gastrotools_logo_horizontal_positive_rgb.png"
    width={160}
    height={90}
    alt="logo"
  />

  <ul className="flex flex-row place-content-between w-2/3 hover:font-bold">
    <Link href="/">Brand</Link>
    <Link href="/">Carbonstål</Link>
    <Link href="/">5-ply</Link>
    <Link href="/">Køkkenknive</Link>
    <Link href="/">Bagestål</Link>
    <Link href="/">Stegeplade</Link>
    <Link href="/">Tilbehør</Link>
  </ul>
</nav>
</header> */
}
