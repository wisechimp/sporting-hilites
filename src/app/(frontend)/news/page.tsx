import NewsList from "@/app/components/News-List/news-list";
import { sanityFetch } from "@/sanity/lib/live";
import { getArticles } from "@/sanity/lib/queries";

const NewsPage = async () => {
  const { data: allNews } = await sanityFetch({
    query: getArticles,
  });

  return (
    <div>
      <h1>News!</h1>
      <NewsList data={allNews} />
    </div>
  );
};

export default NewsPage;
