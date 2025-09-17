import { groq } from "next-sanity";

import Article from "@/types/article-type";

import { client } from "./lib/client";

const getArticles = async (): Promise<Article[]> => {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
};

const getArticle = async (slug: string): Promise<Article> => {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
};

const getLatestNews = async (): Promise<Article[]> => {
  return client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc)[0..4]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
};

export { getArticles, getArticle, getLatestNews };
