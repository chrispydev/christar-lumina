import { groq } from "next-sanity";

export const featuredProjectsQuery = groq`
*[_type == "works"] | order(_createdAt desc){
  _id,
  title,
  slug,
  category,
  description,
  coverImage,
  images,
  technologies
}
`;

export const projectsQuery = groq`
*[_type == "works"] | order(_createdAt desc){
  _id,
  title,
  slug,
  category,
  description,
  coverImage,
  images,
  technologies,
  featured
}
`;


export const projectQuery = groq`
  *[_type == "works" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    coverImage {
      asset->{
        _id,
        url
      }
    },
    images[] {
      _key,
      asset->{
        _id,
        url
      }
    },
    client,
    year,
    duration,
    services,
    technologies,
    body,
    link,
    github
  }
`;
