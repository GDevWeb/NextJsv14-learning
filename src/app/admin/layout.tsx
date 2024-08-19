import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Dashboard - Admin`,
  description: "Dashboard administrateur",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="w-full ">
        <ul className="w-full p-2 flex gap-2">
          <li>
            <Link href="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/users">Users</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
