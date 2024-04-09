import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes as gardenSchemaTypes} from './schemas/garden'
import {schemaTypes as mainSchemaTypes} from './schemas/main'

import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig([
  {
    name: 'main-studio',
    title: 'Main Studio',
    basePath: '/main-studio',
    projectId: '70vpo1cx',
    dataset: 'production',
    plugins: [deskTool(), visionTool(), markdownSchema()],
    schema: {
      types: mainSchemaTypes,
    },
  },
  {
    name: 'garden-studio',
    title: 'Garden Studio 🌳⚙️',
    basePath: '/garden-studio',
    projectId: 'av1qyq1c',
    dataset: 'production',
    plugins: [deskTool(), visionTool(), markdownSchema()],
    schema: {
      types: gardenSchemaTypes,
    },
  },
])
