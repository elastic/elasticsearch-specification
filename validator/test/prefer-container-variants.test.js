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
import { ruleTester } from './_tester.js'
import rule from '../rules/prefer-container-variants.js'

ruleTester.run('prefer-container-variants', rule, {
  valid: [
    {
      name: 'class that is a container already',
      code: `/** @variants container */
      class Retriever {
        standard?: StandardRetriever
        knn?: KnnRetriever
      }`
    },
    {
      name: 'one required property',
      code: `class Retriever {
        standard: StandardRetriever
        knn?: KnnRetriever
      }`
    },
    {
      name: 'types with different suffixes',
      code: `class SearchPart {
        query?: QueryContainer
        knn?: KnnSearch
      }`
    },
    {
      name: 'types that only repeat the property name',
      code: `class DateRange {
        format?: Format
        time_zone?: TimeZone
      }`
    }
  ],
  invalid: [
    {
      name: 'optional properties whose types are the property name and a common suffix',
      code: `class Retriever {
        standard?: StandardRetriever
        text_similarity?: TextSimilarityRetriever
      }`,
      errors: [{ messageId: 'containerShape', data: { name: 'Retriever', suffix: 'Retriever' } }]
    },
    {
      name: 'class name that ends with Container',
      code: `class RankContainer {
        rrf?: RrfRank
      }`,
      errors: [{ messageId: 'containerName', data: { name: 'RankContainer' } }]
    }
  ]
})
