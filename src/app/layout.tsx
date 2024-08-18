import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning NextJs14",
  description: "Learn in practicing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
