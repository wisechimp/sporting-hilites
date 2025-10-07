import NewsList from "@/components/News-List/news-list";
import Article from "@/types/article-type";

const NewsPage = async () => {
  const allNews = new Array<Article>();

  return (
    <div>
      <h1>News!</h1>
      <NewsList data={allNews} />
    </div>
  );
};

export default NewsPage;
