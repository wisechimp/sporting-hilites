import Link from "next/link";

import NewsList from "@/components/News-List/news-list";
import Article from "@/types/article-type";

const NewsPage = async () => {
  const allNews = new Array<Article>();

  return (
    <div>
      <h1>News!</h1>
      <NewsList data={allNews} />
      <Link href="/football/premier-league/2025-round-7">
        Where is the story?
      </Link>
    </div>
  );
};

export default NewsPage;
