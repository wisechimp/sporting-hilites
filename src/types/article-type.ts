import { PortableTextBlock } from "sanity";

type Article = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};

export default Article;
