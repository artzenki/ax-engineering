import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Hero Visual',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Visual & Banner', default: true },
    { name: 'company', title: 'Company & Contact Info' },
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Section Background Image',
      type: 'image',
      group: 'hero',
      description: 'Upload or choose the monumental architectural visual for the 100vh hero banner on the home page.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt Description',
      type: 'string',
      group: 'hero',
      description: 'Descriptive text for accessibility and search engines.',
      initialValue: 'A-X Engineering Luxury Villa & Architectural Studio Gostivar',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'company',
      initialValue: 'A-X Engineering',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'company',
      initialValue: 'Architecture Studio & Engineering Excellence',
    }),
    defineField({
      name: 'location',
      title: 'City & Country',
      type: 'string',
      group: 'company',
      initialValue: 'Gostivar, North Macedonia',
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      group: 'company',
      initialValue: 'Bulevard Braka Ginovski, Gostivar 1230',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'company',
      initialValue: '+389 70 850 120',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'company',
      initialValue: 'contact@axengineering.mk',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      group: 'company',
      initialValue: 'Hënë - Premte: 08:30 - 17:00 | Shtunë: Me Termine',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tagline',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'A-X Engineering Site Settings',
        subtitle: subtitle || 'Hero Visual & Contact Configuration',
        media,
      }
    },
  },
})
