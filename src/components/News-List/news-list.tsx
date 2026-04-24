import Post from "@/types/post";

import NewsItem from "./news-item";

type NewsListProps = {
  data: Array<Post>;
};

const NewsList = ({ data }: NewsListProps) => {
  return data.map((post, i) => {
    return <NewsItem key={i} post={post} />;
  });
};

export default NewsList;
