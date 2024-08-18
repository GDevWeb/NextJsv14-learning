import Nav from "@/app/components/layout/navBar/Nav";
import Image from "next/image";
import Link from "next/link";
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
          Welcome to My Next.js 14 Site
        </h1>
      </div>
      <Nav />
    </header>
  );
}
