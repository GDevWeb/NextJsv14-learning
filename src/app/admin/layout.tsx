import { Metadata } from "next";
import Navbar from "../components/Admin/NavBar/Navbar";

export const metadata: Metadata = {
  title: `Admin - Dashboard`,
  description: `Administration section of the application`,
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
