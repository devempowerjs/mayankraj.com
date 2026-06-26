import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'devempowerjs CMS',

  projectId: 'kytly91g',
  dataset: 'production',

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
})