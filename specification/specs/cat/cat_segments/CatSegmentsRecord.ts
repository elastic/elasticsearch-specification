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

class CatSegmentsRecord {
  /**
   * index name
   */
  'index'?:IndexName
  /**
   * shard name
   */
  'shard'?:string
  /**
   * primary or replica
   * @aliases p,pr,primaryOrReplica
   */
  'prirep'?:string
  /**
   * ip of node where it lives
   */
  'ip'?:string
  /**
   * unique id of node where it lives
   */
  'id'?:NodeId
  /**
   * segment name
   */
  'segment'?:string
  /**
   * segment generation
   */
  'generation'?:string
  /**
   * number of docs in segment
   */
  'docs.count'?:string
  /**
   * number of deleted docs in segment
   */
  'docs.deleted'?:string
  /**
   * segment size in bytes
   */
  'size'?:ByteSize
  /**
   * segment memory in bytes
   */
  'size.memory'?:ByteSize
  /**
   * is segment committed
   */
  'committed'?:string
  /**
   * is segment searched
   */
  'searchable'?:string
  /**
   * version
   */
  'version'?:string
  /**
   * is segment compound
   */
  'compound'?:string
}
