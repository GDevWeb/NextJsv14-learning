import Link from "next/link";

const F4Page = () => {
  return (
    <>
      <h1>F4Page</h1>

      <Link href={"/f1/f3"}>F3</Link>
      <Link href={"/about"}>About</Link>
    </>
  );
};

export default F4Page;
