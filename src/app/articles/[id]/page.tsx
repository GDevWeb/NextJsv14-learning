"use client";
import { Article } from "@/app/types/articles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles/articlesTab.json");

        if (!response.ok) {
          throw new Error(`Error while fetching articles`);
        }

        const articles = await response.json();

        const foundArticle = articles.find(
          (article: { id: string }) => article.id === id
        );

        if (!foundArticle) {
          return `Article not found !`;
        }

        setArticle(foundArticle);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchArticles();
  }, [id]);

  if (error) {
    return <p>An error has occurred : {error}</p>;
  }

  if (!article) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section>
        <Link href="/articles" className="button-primary">
          Retour aux articles
        </Link>
      </section>
      <section className="main-content">
        <article className=" min-h-[50vh] flex items-center justify-between flex-wrap bg-white shadow-lg rounded-lg p-6">
          <header className="w-full mb-6">
            <h1 className="article-title">{article.title}</h1>
          </header>
          <section className="article-paragraph flex items-center justify-between text-center">
            <p>{article.description}</p>
          </section>
          <footer className="w-full flex items-center justify-between mt-8">
            <p className="article-date">
              Publié le {new Date(article.createdAt).toLocaleDateString()}
            </p>
            <p className="article-date"> par {article.author}</p>
          </footer>
        </article>
      </section>
    </>
  );
}
