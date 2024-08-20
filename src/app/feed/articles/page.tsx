// feed/articles
import { ArticlePage } from "../../components/ArticlePage";
export default async function ArticleDetail() {
  const response = await fetch(
    "http://localhost:3000/api/articles/articlesTab.json"
  );
  const data = await response.json();

  return (
    <>
      <ArticlePage title={"Articles List"} articles={data} />
    </>
  );
}
