import Link from "next/link";

import Post from "@/types/post";

type NewsItemProps = {
  post: Post;
};

const NewsItem = ({ post }: NewsItemProps) => {
  const { title, slug } = post;
  return (
    <div className="flexListItem">
      <h3>{title}</h3>
      <Link className="flexListItem" href={`/${slug}`}>
        Read More
      </Link>
    </div>
  );
};

export default NewsItem;
