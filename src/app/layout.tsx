import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import type { Metadata } from "next";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning NextJs14",
  description: "Learn in practicing",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <div className="flex">
            <main className="w-full flex items-start justify-between flex-grow">
              {children}
            </main>
          </div>
          {modal}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
