import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'categoryName',
      title: 'Category Name (Fallback/Quick)',
      type: 'string',
      description: 'e.g. Luxury Residence, Commercial, Architectural Design, Supervision',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Gostivar, North Macedonia',
    }),
    defineField({
      name: 'year',
      title: 'Year Completed / Started',
      type: 'string',
      description: 'e.g. 2024 or 2025 - Present',
    }),
    defineField({
      name: 'area',
      title: 'Total Area / Surface',
      type: 'string',
      description: 'e.g. 1,250 m²',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'Under Construction', value: 'Under Construction' },
          { title: 'In Concept / Planning', value: 'In Concept / Planning' },
        ],
      },
      initialValue: 'Completed',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Showcase Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery (Masonry & Details)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption / Room / Angle',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Summary / Hook',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Detailed Architectural Narrative',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'servicesDone',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Architecture Concept, Interior Styling, Site Supervision, Engineering Audit',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'categoryName',
      media: 'mainImage',
    },
  },
})
