import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-[#FCFBF7]">
      <nav className="flex place-content-between">
        <div>
          <Link href="https://www.gastrotools.dk/"> Gastrotools.dk</Link>
        </div>
        <div>
          <h4>Gastrotools</h4>
          <Link href="/">
            <Image
              src="/img/gastrotools_symbol_negative_rgb.png"
              width={70}
              height={70}
              alt="logo"
            />
          </Link>
        </div>
        <div className="text-[#FCFBF7]">
          <h4>Kontakt os:</h4>
          <p> info@gastrotools.dk</p>
          <p>+45 71 99 51 70</p>
        </div>
      </nav>
      <div
        className="text-xs flex place-content-center
"
      >
        © Gastrotools.dk 2025 - CVR: 38129791 - Baggesensgade 4C, 2. sal, 2200
        København N, Denmark
      </div>
    </footer>
  );
};

export default Footer;
