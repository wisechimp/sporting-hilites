import Link from "next/link";

import Article from "@/types/article-type";

type NewsItemProps = {
  article: Article;
};

const NewsItem = ({ article }: NewsItemProps) => {
  console.log(JSON.stringify(article));
  const { title, slug } = article;
  return (
    <div>
      <h3>{title}</h3>
      <Link href={`news/${slug}`}>Read More</Link>
    </div>
  );
};

export default NewsItem;
