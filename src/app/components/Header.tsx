import Image from "next/image";
import Link from "next/link";
import nextJsLogo from "/public/image/nextJs_logo_custom.webp";

export default function Header() {
  return (
    <header className="header p-4">
      <Link href={"/"}>
        <Image
          src={nextJsLogo}
          width={150}
          height={150}
          alt="logo custom nextJs"
          className="rounded"
        ></Image>
      </Link>
      <h1 className="w-full text-3xl font-semibold text-center ">
        Welcome on my site about Next.Js 14
      </h1>
    </header>
  );
}
