import { redirect } from "next/navigation";

import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { sanityFetch } from "@/sanity/lib/live";
import { getArticle } from "@/sanity/sanity-utils";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

dayjs.extend(advancedFormat);

const PostPage = async ({ params }: PostPageProps) => {
  const { data: post } = await sanityFetch({
    query: getArticle,
    params: await params,
  });

  if (!post) {
    return redirect("/404");
  }

  const { title, author, body, publishedAt } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>Author: {author?.name || "Ma Sharp"}</p>
        <p>Posted on: {dayjs(publishedAt).format("Do MMMM YYYY")}</p>
      </div>
      <div>
        <div>{body && <PortableText value={body} />}</div>
      </div>
    </div>
  );
};

export default PostPage;
