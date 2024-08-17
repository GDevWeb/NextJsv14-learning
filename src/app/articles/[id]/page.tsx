"use client";
import { useParams } from "next/navigation";

export default function ArticleDetail() {
  const { id } = useParams();
  return <h1>Article n°{id}</h1>;
}
