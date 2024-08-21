import type { Metadata } from "next";
import { ReactNode } from "react";
import Login from "../login/page";

export const metadata: Metadata = {
  title: "Feed page - Intercepting Routes",
  description: "Learn NextJs - Intercepting Routes",
};

export default function FeedLayout({
  children,
  photo,
  contentA,
  contentB,
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
      {photo}
      {contentB}
    </main>
  );
}
