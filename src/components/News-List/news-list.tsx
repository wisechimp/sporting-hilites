import Article from "@/types/article-type";

import NewsItem from "./news-item";

type NewsListProps = {
  data: Array<Article>;
};

const NewsList = ({ data }: NewsListProps) => {
  return data.map((article) => {
    return <NewsItem key={article._id} article={article} />;
  });
};

export default NewsList;
