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

import { Field } from '@_types/common'
import { QueryVector } from '@_types/Knn'
import { integer } from '@_types/Numeric'

export interface KnnSearchQuery {
  /** The name of the vector field to search against */
  field: Field
  /** The query vector */
  query_vector: QueryVector
  /** The final number of nearest neighbors to return as top hits */
  k: integer
  /** The number of nearest neighbor candidates to consider per shard */
  num_candidates: integer
}
