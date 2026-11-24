import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member / Staff',
  type: 'document',
  groups: [
    { name: 'sq', title: '🇦🇱 Shqip (Kryesore)', default: true },
    { name: 'mk', title: '🇲🇰 Македонски' },
    { name: 'en', title: '🇬🇧 English' },
    { name: 'meta', title: '⚙️ Profile & Contact' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Emri & Mbiemri',
      type: 'string',
      group: 'meta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto / Portret',
      type: 'image',
      group: 'meta',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
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
      name: 'role',
      title: 'Pozita / Titulli Profesional (Shqip)',
      type: 'string',
      group: 'sq',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografia e Shkurtër (Shqip)',
      type: 'text',
      rows: 3,
      group: 'sq',
    }),

    // --- 🇲🇰 MACEDONIAN ---
    defineField({
      name: 'role_mk',
      title: 'Работна Позиција (Македонски)',
      type: 'string',
      group: 'mk',
    }),
    defineField({
      name: 'bio_mk',
      title: 'Кратка Биографија (Македонски)',
      type: 'text',
      rows: 3,
      group: 'mk',
    }),

    // --- 🇬🇧 ENGLISH ---
    defineField({
      name: 'role_en',
      title: 'Professional Role (English)',
      type: 'string',
      group: 'en',
    }),
    defineField({
      name: 'bio_en',
      title: 'Short Biography (English)',
      type: 'text',
      rows: 3,
      group: 'en',
    }),
  ],
})
