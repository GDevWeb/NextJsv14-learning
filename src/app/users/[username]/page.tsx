"use client";
import { useParams } from "next/navigation";
export default function UserPage() {
  const { username } = useParams();
  return (
    <section>
      <h1>Welcome on your dashboard {username}</h1>
    </section>
  );
}
