import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string"
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime"
    })
  ]
});
