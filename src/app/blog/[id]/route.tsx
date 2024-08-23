// app/blog/[id]
import { redirect } from "next/navigation";
import articles from "../data";

// get one article by id :
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );

  if (!article) {
    redirect("/blog");
  }
  return new Response(JSON.stringify(article), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

// PATCH - update
// update Article
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 1. get the body request
  const body = await request.json();
  const updatedTitle = body.title;

  // 2. findIndex article
  const indexArticle = articles.findIndex(
    (article) => article.id === parseInt(params.id)
  );

  // 2. if article update
  articles[indexArticle] = updatedTitle;

  // 3.return response :
  return Response.json(articles[indexArticle]);
}
// Delete

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.findIndex(
    (article) => article.id === parseInt(params.id)
  );

  articles.splice(article, 1);

  return new Response(JSON.stringify(articles), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
