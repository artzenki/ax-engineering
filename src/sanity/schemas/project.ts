import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'sq', title: '🇦🇱 Shqip (Kryesore)', default: true },
    { name: 'mk', title: '🇲🇰 Македонски' },
    { name: 'en', title: '🇬🇧 English' },
    { name: 'specs', title: '📐 Specs & Info' },
    { name: 'media', title: '📸 Media & Gallery' },
  ],
  fields: [
    // --- 🇦🇱 ALBANIAN (Primary) ---
    defineField({
      name: 'title',
      title: 'Titulli i Projektit (Shqip)',
      type: 'string',
      group: 'sq',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Përmbledhje e Shkurtër (Shqip)',
      type: 'text',
      rows: 3,
      group: 'sq',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Përshkrimi i Plotë Arkitekturor (Shqip)',
      type: 'text',
      rows: 6,
      group: 'sq',
    }),
    defineField({
      name: 'servicesDone',
      title: 'Shërbimet e Realizuara (Shqip)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'sq',
    }),

    // --- 🇲🇰 MACEDONIAN ---
    defineField({
      name: 'title_mk',
      title: 'Наслов на Проект (Македонски)',
      type: 'string',
      group: 'mk',
    }),
    defineField({
      name: 'shortDescription_mk',
      title: 'Краток Опис (Македонски)',
      type: 'text',
      rows: 3,
      group: 'mk',
    }),
    defineField({
      name: 'fullDescription_mk',
      title: 'Детален Архитектонски Опис (Македонски)',
      type: 'text',
      rows: 6,
      group: 'mk',
    }),
    defineField({
      name: 'servicesDone_mk',
      title: 'Извршени Услуги (Македонски)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'mk',
    }),

    // --- 🇬🇧 ENGLISH ---
    defineField({
      name: 'title_en',
      title: 'Project Title (English)',
      type: 'string',
      group: 'en',
    }),
    defineField({
      name: 'shortDescription_en',
      title: 'Short Summary (English)',
      type: 'text',
      rows: 3,
      group: 'en',
    }),
    defineField({
      name: 'fullDescription_en',
      title: 'Full Architectural Narrative (English)',
      type: 'text',
      rows: 6,
      group: 'en',
    }),
    defineField({
      name: 'servicesDone_en',
      title: 'Services Rendered (English)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'en',
    }),

    // --- 📐 SPECS & METADATA ---
    defineField({
      name: 'slug',
      title: 'Slug (URL identifier)',
      type: 'slug',
      group: 'specs',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category Reference',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'specs',
    }),
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      group: 'specs',
      description: 'e.g. Luxury Residences, Commercial, Architectural Design, Supervision',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'specs',
      description: 'e.g. Gostivar, North Macedonia',
    }),
    defineField({
      name: 'year',
      title: 'Year Completed / Started',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'area',
      title: 'Total Surface Area',
      type: 'string',
      group: 'specs',
      description: 'e.g. 1,250 m²',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'specs',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'Under Construction', value: 'Under Construction' },
          { title: 'In Concept', value: 'In Concept' },
        ],
      },
      initialValue: 'Completed',
    }),
    defineField({
      name: 'featured',
      title: 'Featured / Signature Spotlight',
      type: 'boolean',
      group: 'specs',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'specs',
      initialValue: 0,
    }),

    // --- 📸 MEDIA & GALLERY ---
    defineField({
      name: 'mainImage',
      title: 'Main Showcase Image',
      type: 'image',
      group: 'media',
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
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption / Room / Perspective',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'categoryName',
      media: 'mainImage',
    },
  },
})
