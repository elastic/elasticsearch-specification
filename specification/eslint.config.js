import parser from '@typescript-eslint/parser'
import validator from 'eslint-plugin-es-spec'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  files: ['**/*.ts'],
  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  plugins: { 'es-spec-validator': validator },
  rules: {
    'es-spec-validator/single-key-dictionary-key-is-string': 'error'
  }
})
