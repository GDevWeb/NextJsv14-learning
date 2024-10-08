import Image from "next/image";
import Link from "next/link";
import Nav from "./navBar/Nav";
import nextJsLogo from "/public/image/nextJs_logo_custom.webp";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container w-full">
        <Link href={"/"}>
          <Image
            src={nextJsLogo}
            width={60}
            height={60}
            alt="Custom Next.js Logo"
            className="rounded"
          />
        </Link>
        <h1 className="text-2xl md:text-3xl font-extrabold text-center">
          Welcome
        </h1>
      </div>
      <Nav />
    </header>
  );
}
