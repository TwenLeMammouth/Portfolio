import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City',
      description: 'Name of the city',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      description: 'Name of country',
      type: 'string',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
      description: 'Latitude of City',
      validation: (Rule) => Rule.min(0).max(90),
    }),
    defineField({
      name: 'isNorthHemisphere',
      title: 'IsNorthHemisphere',
      type: 'boolean',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
      description: 'Longitude of City',
      validation: (Rule) => Rule.min(0).max(180),
    }),
    defineField({
        name: 'isEastSide',
        title: 'IsEastSide',
        type: 'boolean',
      }),
  ],
})