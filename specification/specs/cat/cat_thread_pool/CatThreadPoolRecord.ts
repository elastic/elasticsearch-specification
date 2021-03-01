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

class CatThreadPoolRecord {
  /** @prop_serializer StringIntFormatter */
  active: long
  /** @prop_serializer NullableStringLongFormatter */
  completed?: long
  /** @prop_serializer NullableStringIntFormatter */
  core?: integer
  ephemeral_node_id?: Id
  host?: string
  ip?: string
  keep_alive?: Time
  /** @prop_serializer NullableStringIntFormatter */
  largest?: integer
  /** @prop_serializer NullableStringIntFormatter */
  max?: integer
  name: string
  node_id?: Id
  node_name: string
  /** @prop_serializer NullableStringIntFormatter */
  pool_size?: integer
  /** @prop_serializer NullableStringIntFormatter */
  port?: integer
  /** @prop_serializer NullableStringIntFormatter */
  pid?: integer
  /** @prop_serializer StringIntFormatter */
  queue: integer
  /** @prop_serializer NullableStringIntFormatter */
  queue_size?: integer
  /** @prop_serializer StringLongFormatter */
  rejected: long
  /** @prop_serializer NullableStringIntFormatter */
  size?: integer
  type?: string
}
