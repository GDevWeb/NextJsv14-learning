import { NextRequest } from "next/server";
import articles from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredArticles = query
    ? articles.filter((article) => article.title.includes(query))
    : articles;

  return new Response(JSON.stringify(filteredArticles), {
    status: 200,
  });
}

export async function POST(request: Request) {
  const article = await request.json();

  const newArticle = {
    id: articles.length + 1,
    title: article.title,
    description: article.description,
    link: article.link,
  };

  articles.push(newArticle);
  return new Response(JSON.stringify(newArticle), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
