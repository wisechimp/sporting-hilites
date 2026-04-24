import Link from "next/link";

import Post from "@/types/post";

type NewsItemProps = {
  post: Post;
};

const NewsItem = ({ post }: NewsItemProps) => {
  console.log("Post data" + JSON.stringify(post));
  const { title, slug } = post;
  return (
    <div>
      <h3>{title}</h3>
      <Link href={`/${slug}`}>Read More</Link>
    </div>
  );
};

export default NewsItem;
