"use client";
import Image from "next/image";
import Link from "next/link";
import error500 from "../../public/image/errorPicture/500v2.webp";

const Custom500 = () => {
  return (
    <div className="w-full h-full m-auto p-4">
      <Image src={error500} alt="error 404 picture" className="rounded" />

      <div className="w-full p-2 flex items-center gap-2 justify-center">
        <button type="button" className="button-primary">
          <Link href={"/contact"}>Contact us</Link>
        </button>
      </div>
    </div>
  );
};

export default Custom500;
