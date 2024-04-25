import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      type: 'markdown',
    }),
  ],
})
