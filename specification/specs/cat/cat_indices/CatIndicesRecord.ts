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

class CatIndicesRecord {
  'docs.count'?: string
  'docs.deleted'?: string
  health?: string
  index?: IndexName
  i?: string
  pri?: string
  'pri.store.size'?: ByteSize
  rep?: string
  status?: string
  'store.size'?: ByteSize
  tm?: string
  uuid?: Uuid
  cd?: string
  cds?: DateString
  'creation.date'?: string
  'creation.date.string'?: DateString
}
