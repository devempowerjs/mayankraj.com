import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'A short, catchy headline (e.g. Full Stack Developer)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortIntroduction',
      title: 'Short Introduction',
      type: 'text',
      description: 'A brief introduction about yourself',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'primaryButtonUrl',
      title: 'Primary Button URL',
      type: 'url',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryButtonUrl',
      title: 'Secondary Button URL',
      type: 'url',
    }),
  ],
})
