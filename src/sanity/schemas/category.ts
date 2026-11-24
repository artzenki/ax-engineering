import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulli (Shqip)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_mk',
      title: 'Наслов (Македонски)',
      type: 'string',
    }),
    defineField({
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
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
      name: 'description',
      title: 'Përshkrimi (Shqip)',
      type: 'text',
    }),
    defineField({
      name: 'description_mk',
      title: 'Опис (Македонски)',
      type: 'text',
    }),
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
    }),
  ],
})
