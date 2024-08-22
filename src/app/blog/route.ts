// app/blog/route.ts
import articles from "./data";

export async function GET() {
  return Response.json(articles);
}

export async function POST(request) {
  const article = await request.json();
  const newArticle = {
    id: articles.length + 1,
    title: article.title,
    description: article.description,
  };
  articles.push(newArticle);

  return new Response(JSON.stringify(newArticle), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
