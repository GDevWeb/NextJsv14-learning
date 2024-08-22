import type { Metadata } from "next";
import { ReactNode } from "react";
import Login from "../login/page";

export const metadata: Metadata = {
  title: "Feed page - Intercepting Routes",
  description: "Learn NextJs - Intercepting Routes",
};

export default function FeedLayout({
  children,
  contentA,
  contentB,
  photo,
}: {
  children: ReactNode;
  contentA: ReactNode;
  contentB: ReactNode;
  photo: ReactNode;
}) {
  // mise en place d'un fallback et non d'un middleware car chapitre pas encore abordé
  let isLoggedIn = true;

  if (!isLoggedIn) return <Login />;

  return (
    <main>
      {children}
      {contentA}
      {contentB}
      {photo} {/* overlay */}
    </main>
  );
}
