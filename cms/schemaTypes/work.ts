import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'works',
  title: 'Works',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'Web Application'},
          {title: 'Mobile Application', value: 'Mobile Application'},
          {title: 'Corporate Website', value: 'Corporate Website'},
          {title: 'UI / UX Design', value: 'UI / UX Design'},
          {title: 'Automation', value: 'Automation'},
          {title: 'Data Science', value: 'Data Science'},
        ],
      },
    }),

    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Example: 3 Months',
    }),

    defineField({
      name: 'link',
      title: 'Live Project URL',
      type: 'url',
    }),

    defineField({
      name: 'github',
      title: 'GitHub Repository',
      type: 'url',
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'images',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),

    defineField({
      name: 'body',
      title: 'Project Story',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'category',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
