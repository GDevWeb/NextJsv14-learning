import Navbar from "@/app/components/Admin/NavBar/Navbar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: `Admin - Dashboard`,
  description: `Administration section of the application`,
};

export default function AdminLayout({
  children,
  analytics,
  team,
}: {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <aside className="w-[25%] bg-slate-500 rounded">{analytics}</aside>
        <main className="flex-grow">{children}</main>
        <aside className="w-[25%] bg-slate-500 rounded">{team}</aside>
      </div>
    </>
  );
}
