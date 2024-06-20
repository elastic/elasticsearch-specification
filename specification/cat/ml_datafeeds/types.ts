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

import { DatafeedState } from '@ml/_types/Datafeed'

export class DatafeedsRecord {
  /**
   * The datafeed identifier.
   */
  'id'?: string
  /**
   * The status of the datafeed.
   * @aliases s
   */
  'state'?: DatafeedState
  /**
   * For started datafeeds only, contains messages relating to the selection of a node.
   * @aliases ae
   */
  'assignment_explanation'?: string
  /**
   * The number of buckets processed.
   * @aliases bc, bucketsCount
   */
  'buckets.count'?: string
  /**
   * The number of searches run by the datafeed.
   * @aliases sc, searchCount
   */
  'search.count'?: string
  /**
   * The total time the datafeed spent searching, in milliseconds.
   * @aliases st, searchTime
   */
  'search.time'?: string
  /**
   * The average search time per bucket, in milliseconds.
   * @aliases sba, searchBucketAvg
   */
  'search.bucket_avg'?: string
  /**
   * The exponential average search time per hour, in milliseconds.
   * @aliases seah, searchExpAvgHour
   */
  //Node info
  'search.exp_avg_hour'?: string
  /**
   * The unique identifier of the assigned node.
   * For started datafeeds only, this information pertains to the node upon which the datafeed is started.
   * @aliases ni, nodeId
   */
  'node.id'?: string
  /**
   * The name of the assigned node.
   * For started datafeeds only, this information pertains to the node upon which the datafeed is started.
   * @aliases nn, nodeName
   */
  'node.name'?: string
  /**
   * The ephemeral identifier of the assigned node.
   * For started datafeeds only, this information pertains to the node upon which the datafeed is started.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id'?: string
  /**
   * The network address of the assigned node.
   * For started datafeeds only, this information pertains to the node upon which the datafeed is started.
   * @aliases na, nodeAddress
   */
  'node.address'?: string
}
