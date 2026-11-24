import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: [
    { name: 'sq', title: '🇦🇱 Shqip (Kryesore)', default: true },
    { name: 'mk', title: '🇲🇰 Македонски' },
    { name: 'en', title: '🇬🇧 English' },
    { name: 'workflow', title: '🔄 Metodologjia & Hapat' },
    { name: 'faqs', title: '❓ Pyetjet e Shpeshta (FAQ)' },
    { name: 'media', title: '📸 Media & Vizuale' },
    { name: 'toggles', title: '🎛️ Pamja & Toggles' },
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
      name: 'slug',
      title: 'Slug (URL e Faqes)',
      type: 'slug',
      group: 'meta',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'meta',
      initialValue: 0,
    }),

    // --- 📸 MEDIA ---
    defineField({
      name: 'heroImage',
      title: 'Hero Image / Imazhi Kryesor',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
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
      rows: 5,
      group: 'sq',
    }),
    defineField({
      name: 'features',
      title: 'Pikat Kryesore / Fusha e Veprimit (Shqip)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'sq',
    }),
    defineField({
      name: 'deliverables',
      title: 'Dorëzimet & Dokumentacioni Teknik (Shqip)',
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
      rows: 5,
      group: 'mk',
    }),
    defineField({
      name: 'features_mk',
      title: 'Клучни Елементи (Македонски)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'mk',
    }),
    defineField({
      name: 'deliverables_mk',
      title: 'Технички Испораки (Македонски)',
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
      rows: 5,
      group: 'en',
    }),
    defineField({
      name: 'features_en',
      title: 'Key Deliverables (English)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'en',
    }),
    defineField({
      name: 'deliverables_en',
      title: 'Technical Deliverables (English)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'en',
    }),

    // --- 🔄 METODOLOGJIA / WORKFLOW ---
    defineField({
      name: 'workflow',
      title: 'Hapat e Procesit të Punës (Workflow)',
      type: 'array',
      group: 'workflow',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', type: 'string', title: 'Hapi (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Titulli i Hapit (Shqip)' },
            { name: 'title_mk', type: 'string', title: 'Наслов на Чекор (Македонски)' },
            { name: 'title_en', type: 'string', title: 'Step Title (English)' },
            { name: 'description', type: 'text', rows: 2, title: 'Përshkrimi (Shqip)' },
            { name: 'description_mk', type: 'text', rows: 2, title: 'Опис (Македонски)' },
            { name: 'description_en', type: 'text', rows: 2, title: 'Description (English)' },
          ],
        },
      ],
    }),

    // --- ❓ FAQS ---
    defineField({
      name: 'faqs',
      title: 'Pyetjet e Shpeshta (FAQ)',
      type: 'array',
      group: 'faqs',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Pyetja (Shqip)' },
            { name: 'question_mk', type: 'string', title: 'Прашање (Македонски)' },
            { name: 'question_en', type: 'string', title: 'Question (English)' },
            { name: 'answer', type: 'text', rows: 3, title: 'Përgjigjja (Shqip)' },
            { name: 'answer_mk', type: 'text', rows: 3, title: 'Одговор (Македонски)' },
            { name: 'answer_en', type: 'text', rows: 3, title: 'Answer (English)' },
          ],
        },
      ],
    }),

    // --- 🎛️ TOGGLES ---
    defineField({
      name: 'showWorkflow',
      title: 'Shfaq Seksionin e Hapat e Punës (Workflow)',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showFaqs',
      title: 'Shfaq Seksionin FAQ',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showDeliverables',
      title: 'Shfaq Dorëzimet Teknike',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'number',
      media: 'heroImage',
    },
  },
})
