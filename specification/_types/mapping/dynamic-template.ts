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

import { Property } from './Property'

export class DynamicTemplate {
  mapping?: Property
  match?: string
  match_mapping_type?: string
  match_pattern?: MatchType
  path_match?: string
  path_unmatch?: string
  unmatch?: string
}

export enum MatchType {
  simple,
  regex
}

/**
 * @es_quirk This is a boolean that evolved into an enum. Boolean values should be accepted on reading, and
 *   true and false must be serialized as JSON booleans, or it may break Kibana (see elasticsearch-java#139)
 */
export enum DynamicMapping {
  strict,
  runtime,
  true,
  false
}
