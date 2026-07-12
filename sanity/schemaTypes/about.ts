import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      description: 'Detailed information about yourself',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      options: { accept: 'application/pdf' },
      description: 'Upload your resume (PDF format recommended)',
    }),
  ],
})
