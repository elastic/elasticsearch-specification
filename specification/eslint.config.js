/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
    'es-spec-validator/single-key-dictionary-key-is-string': 'error',
    'es-spec-validator/dictionary-key-is-string': 'error',
    'es-spec-validator/no-native-types': 'error',
    'es-spec-validator/invalid-node-types': 'error',
    'es-spec-validator/no-generic-number': 'error',
    'es-spec-validator/request-must-have-urls': 'error',
    'es-spec-validator/jsdoc-endpoint-check': [
      'error',
      {
        markdownlint: {
          default: true,
          MD041: false, // first-line-heading
          MD013: false, // line-length
          MD033: false, // no-inline-html
          MD034: false, // no-bare-urls
          MD047: false, // single-trailing-newline
          MD036: false, // no-emphasis-as-heading
          MD040: false, // fenced-code-language
          MD032: false, // blanks-around-lists
          MD031: false, // blanks-around-fences
          MD038: false, // no-space-in-code
          MD060: false, // table-column-style
          MD010: false, // no-hard-tabs
          MD022: false // blanks-around-headers
        }
      }
    ]
  }
})
