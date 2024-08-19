"use client";
import { useRouter } from "next/navigation";
export default function PageAbout() {
  const router = useRouter();

  return (
    <>
      <section>
        <h1 className="w-full  mb-4 text-3xl font-bold text-center ">
          About us
        </h1>
        <p className="text-lg">
          Welcome into about us section. We are expert in web services.
        </p>
      </section>
    </>
  );
}
