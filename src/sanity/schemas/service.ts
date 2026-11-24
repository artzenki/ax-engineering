import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: [
    { name: 'sq', title: '🇦🇱 Shqip (Kryesore)', default: true },
    { name: 'mk', title: '🇲🇰 Македонски' },
    { name: 'en', title: '🇬🇧 English' },
    { name: 'meta', title: '⚙️ General' },
  ],
  fields: [
    defineField({
      name: 'number',
      title: 'Numri Renditës (e.g. 01)',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'meta',
      initialValue: 0,
    }),

    // --- 🇦🇱 ALBANIAN ---
    defineField({
      name: 'title',
      title: 'Titulli i Shërbimit (Shqip)',
      type: 'string',
      group: 'sq',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Përmbledhje e Shkurtër (Shqip)',
      type: 'text',
      rows: 2,
      group: 'sq',
    }),
    defineField({
      name: 'description',
      title: 'Përshkrimi i Plotë (Shqip)',
      type: 'text',
      rows: 4,
      group: 'sq',
    }),
    defineField({
      name: 'features',
      title: 'Pikat Kryesore / Fusha e Veprimit (Shqip)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'sq',
    }),

    // --- 🇲🇰 MACEDONIAN ---
    defineField({
      name: 'title_mk',
      title: 'Наслов на Услуга (Македонски)',
      type: 'string',
      group: 'mk',
    }),
    defineField({
      name: 'shortDescription_mk',
      title: 'Краток Опис (Македонски)',
      type: 'text',
      rows: 2,
      group: 'mk',
    }),
    defineField({
      name: 'description_mk',
      title: 'Детален Опис (Македонски)',
      type: 'text',
      rows: 4,
      group: 'mk',
    }),
    defineField({
      name: 'features_mk',
      title: 'Клучни Елементи (Македонски)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'mk',
    }),

    // --- 🇬🇧 ENGLISH ---
    defineField({
      name: 'title_en',
      title: 'Service Title (English)',
      type: 'string',
      group: 'en',
    }),
    defineField({
      name: 'shortDescription_en',
      title: 'Short Summary (English)',
      type: 'text',
      rows: 2,
      group: 'en',
    }),
    defineField({
      name: 'description_en',
      title: 'Full Description (English)',
      type: 'text',
      rows: 4,
      group: 'en',
    }),
    defineField({
      name: 'features_en',
      title: 'Key Deliverables (English)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'en',
    }),
  ],
})
