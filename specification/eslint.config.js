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
import { jsdoc } from 'eslint-plugin-jsdoc'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
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
      'es-spec-validator/no-same-name-as-enclosing-type': 'error',
      'es-spec-validator/invalid-node-types': 'error',
      'es-spec-validator/no-generic-number': 'error',
      'es-spec-validator/codegen-exclude-on-request-only': 'error',
      'es-spec-validator/request-must-have-urls': 'error',
      'es-spec-validator/no-variants-on-responses': 'error',
      'es-spec-validator/no-inline-unions': 'error',
      'es-spec-validator/prefer-tagged-variants': 'error',
      'es-spec-validator/no-duplicate-type-names': [
        'error',
        {
          ignoreNames: ['Request', 'Response', 'ResponseBase'],
          existingDuplicates: {
            Action: [
              'indices.modify_data_stream',
              'indices.update_aliases',
              'watcher._types'
            ],
            Actions: [
              'ilm._types',
              'security.put_privileges',
              'watcher._types'
            ],
            ComponentTemplate: ['cat.component_templates', 'cluster._types'],
            Context: [
              '_global.get_script_context',
              '_global.search._types',
              'nodes._types'
            ],
            DatabaseConfigurationMetadata: [
              'ingest.get_geoip_database',
              'ingest.get_ip_location_database'
            ],
            Datafeed: ['ml._types', 'xpack.usage'],
            Destination: ['_global.reindex', 'transform._types'],
            Feature: ['features._types', 'indices.get', 'xpack.info'],
            Features: ['indices.get', 'xpack.info'],
            Filter: ['_global.termvectors', 'ml._types'],
            IndexingPressure: [
              'cluster.stats',
              'indices._types',
              'nodes._types'
            ],
            IndexingPressureMemory: ['indices._types', 'nodes._types'],
            Ingest: ['ingest._types', 'nodes._types'],
            MigrationFeature: [
              'migration.get_feature_upgrade_status',
              'migration.post_feature_upgrade'
            ],
            Operation: ['_global.mget', '_global.mtermvectors'],
            ResponseBody: ['_global.search', 'ml.evaluate_data_frame'],
            Phase: ['ilm._types', 'xpack.usage'],
            Phases: ['ilm._types', 'xpack.usage'],
            Pipeline: ['ingest._types', 'logstash._types'],
            Policy: ['enrich._types', 'ilm._types', 'slm._types'],
            RequestItem: ['_global.msearch', '_global.msearch_template'],
            ResponseItem: ['_global.bulk', '_global.mget', '_global.msearch'],
            RoleMapping: ['security._types', 'xpack.usage'],
            RuntimeFieldTypes: ['cluster.stats', 'xpack.usage'],
            ShardsStats: ['indices.field_usage_stats', 'snapshot._types'],
            ShardStats: ['ccr._types', 'indices.stats'],
            Source: ['_global.reindex', 'transform._types'],
            Token: [
              '_global.termvectors',
              'security.authenticate',
              'security.create_service_token',
              'security.enroll_kibana'
            ]
          }
        }
      ],
      'es-spec-validator/no-all-string-literal-unions': 'error',
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
  },
  jsdoc({
    config: 'flat/recommended-typescript-error',
    rules: {
      // Allow custom tags used in Elasticsearch specification
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: [
            'UpdateForV10',
            'aliases',
            'availability',
            'behavior',
            'behavior_meta',
            'category',
            'class_serializer',
            'cluster_privileges',
            'codegen_exclude',
            'codegen_name',
            'codegen_names',
            'doc_id',
            'doc_tag',
            'doc_url',
            'es_quirk',
            'ext_doc_id',
            'index_privileges',
            'non_exhaustive',
            'prop_serializer',
            'rest_spec_name',
            'server_default',
            'shortcut_property',
            'variant',
            'variants'
          ]
        }
      ],
      // Require UpdateForV10 tags to have an associated description/name
      'jsdoc/match-name': [
        'error',
        {
          match: [
            {
              allowName: '/.+/',
              tags: ['UpdateForV10'],
              message: 'Please provide a reason for the breaking change'
            }
          ]
        }
      ],
      // Allow Markdown formatting
      'jsdoc/tag-lines': 'off',
      'jsdoc/no-multi-asterisks': 'off',
      // server_default values aren't parsed by jsdoc correctly
      'jsdoc/valid-types': 'off'
    }
  })
])
