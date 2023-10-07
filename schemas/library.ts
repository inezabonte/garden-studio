import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'library',
  title: 'Library',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the library resource you would like to add',
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
