import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Parallels Routes - Sandbox",
  description: "Learn in practicing",
};

export default function GalleryLayout({
  children,
  users,
  datas,
  login,
}: {
  children: ReactNode;
  users: ReactNode;
  datas: ReactNode;
  login: ReactNode;
}) {
  {
    /* Conditionally rendering */
  }
  const renderUsers = false;

  const isLoggedIn = true;

  if (!isLoggedIn) return login;

  return (
    <main>
      <nav>Some navLinks</nav>
      {children}
      {/* Conditionally rendering */}
      {renderUsers && users}
      {datas}
    </main>
  );
}
