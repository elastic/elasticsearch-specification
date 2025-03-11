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
import { double, integer, long } from '@_types/Numeric'

export class Vertex {
  depth: long
  field: Field
  term: string
  weight: double
}

export class VertexDefinition {
  /**
   * Prevents the specified terms from being included in the results.
   */
  exclude?: string[]
  /**
   * Identifies a field in the documents of interest.
   */
  field: Field
  /**
   * Identifies the terms of interest that form the starting points from which you want to spider out.
   */
  include?: VertexInclude[]
  /**
   * Specifies how many documents must contain a pair of terms before it is considered to be a useful connection.
   * This setting acts as a certainty threshold.
   * @server_default 3
   */
  min_doc_count?: long
  /**
   * Controls how many documents on a particular shard have to contain a pair of terms before the connection is returned for global consideration.
   * @server_default 2
   */
  shard_min_doc_count?: long
  /**
   * Specifies the maximum number of vertex terms returned for each field.
   * @server_default 5
   */
  size?: integer
}

/** @shortcut_property term */
export class VertexInclude {
  boost?: double
  term: string
}
