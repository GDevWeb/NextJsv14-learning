"use client";
import { useRouter } from "next/navigation";

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Article </div>;
}
