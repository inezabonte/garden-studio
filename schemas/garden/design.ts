import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'design',
  title: 'Design',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the design tool you would like to add',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to the tool',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Tell us more about the tool',
    }),
  ],
})
