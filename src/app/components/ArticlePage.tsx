import Link from "next/link";
import React from "react";
import { Article } from "../types/articles";

interface ArticlePageProps {
  title: string;
  articles: Article[] | undefined;
  numberOfArticle?: number;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  title,
  articles,
  numberOfArticle,
}) => {
  // 1. ***State***

  // 2. ***Functions***
  if (!articles || articles.length === 0) {
    return <div>No articles found!</div>;
  }

  const renderArticles = articles
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, numberOfArticle)
    .map((article) => (
      <Link href={`articles/${article.id}`} key={article.id}>
        <div
          id="card"
          className="min-h-[400px] flex flex-col items-start justify-between bg-white p-4 rounded shadow-lg"
        >
          <h2 className="article-title">{article.title}</h2>
          <p className="article-paragraph">{article.description}</p>
          <div
            id="cardFooter"
            className="w-full flex flex-col items-start md:items-center md:flex-row justify-between"
          >
            <p className="article-date">Author: {article.author}</p>
            <p className="article-date">
              Published: {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    ));

  // 3. ***Render***
  return (
    <>
      <section>
        <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderArticles}
      </section>
    </>
  );
};

export default ArticlePage;
