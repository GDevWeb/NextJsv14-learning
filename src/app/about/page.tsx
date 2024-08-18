"use client";
import { useRouter } from "next/navigation";
export default function PageAbout() {
  const router = useRouter();

  return (
    <>
      <section className="flex items-center justify-between">
        <button
          type="button"
          className="button-primary"
          onClick={() => router.push("/contact")}
        >
          Contact us
        </button>
      </section>

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
