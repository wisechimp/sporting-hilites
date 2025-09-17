import { defineQuery } from "next-sanity";

const getArticles = defineQuery(`
  *[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`);

const getArticle = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`);

const getLatestNews = defineQuery(`
  *[_type == "post"] | order(_createdAt desc)[0..4]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`);

export { getArticles, getArticle, getLatestNews };
