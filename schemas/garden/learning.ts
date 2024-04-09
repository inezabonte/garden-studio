import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'learning',
  title: 'Learning',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the learning resource you would like to add',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to the resource',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Tell us more about the resource',
    }),
  ],
})
