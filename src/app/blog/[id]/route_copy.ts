// app/blog/[id]
import articles from "../data";

// getArticleDetail
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );
  return Response.json(article);
}

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

// Delete Article :
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 1. find Article :
  const indexArticle = articles.findIndex(
    (article) => article.id === parseInt(params.id)
  );

  // delete article
  articles.splice(indexArticle, 1);
  // return new articles list
  return Response.json(articles);
}
