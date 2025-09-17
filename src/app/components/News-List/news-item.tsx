import Link from "next/link";

import Article from "@/types/article-type";

type NewsItemProps = {
  article: Article;
};

const NewsItem = ({ article }: NewsItemProps) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <Link href={`news/${article.slug}`}>Read More</Link>
    </div>
  );
};

export default NewsItem;
