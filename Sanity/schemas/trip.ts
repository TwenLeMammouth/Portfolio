import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Name of trip',
      type: 'string',
    }),
    defineField({
      name: 'from',
      title: 'From',
      type: 'reference',
      to: {type: 'location'}
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'reference',
      to: {type: 'location'}
    }),
  ],
})
