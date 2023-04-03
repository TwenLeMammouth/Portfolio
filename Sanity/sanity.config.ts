import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio_01-2023',

  projectId: 'zvw8ittu',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  env: {
    "staging": {
      "plugins": [
        "@sanity/vision"
      ]
    }
  },

  schema: {
    types: schemaTypes,
  },
})
