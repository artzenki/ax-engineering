import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'AX Engineering',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Architecture, Engineering & Construction Excellence',
    }),
    defineField({
      name: 'location',
      title: 'City & Country',
      type: 'string',
      initialValue: 'Gostivar, North Macedonia',
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      initialValue: 'Bulevard Braka Ginovski, Gostivar 1230',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+389 42 123 456',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'contact@axengineering.mk',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      initialValue: 'Mon - Fri: 08:30 - 17:30',
    }),
  ],
})
