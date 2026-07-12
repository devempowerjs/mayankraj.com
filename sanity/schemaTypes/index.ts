import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import about from './about'
import project from './project'
import skill from './skill'
import certificate from './certificate'
import seo from './seo'

export const schemaTypes: SchemaTypeDefinition[] = [
  hero,
  about,
  project,
  skill,
  certificate,
  seo,
]
