import { ArticlePage } from "../components/ArticlePage";
export default async function ArticleDetail() {
  const response = await fetch(
    "http://localhost:3000/api/articles/articlesTab.json"
  );
  const data = await response.json();

  console.log(data);

  return (
    <>
      <section className="w-full p-2 text-center ">
        <h1 className="article-title">Article list</h1>
      </section>
      <ArticlePage title={"Latest Articles"} articles={data} />
    </>
  );
}
