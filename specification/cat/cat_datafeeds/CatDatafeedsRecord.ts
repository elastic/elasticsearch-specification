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

import { DatafeedState } from "../../ml/datafeed/DatafeedState";

export class CatDatafeedsRecord {
  /**
   * the datafeed_id
   */
  "id"?: string;
  /**
   * the datafeed state
   * @aliases s
   */
  "state"?: DatafeedState;
  /**
   * why the datafeed is or is not assigned to a node
   * @aliases ae
   */
  "assignment_explanation"?: string;
  /**
   * bucket count
   * @aliases bc, bucketsCount
   */
  "buckets.count"?: string;
  /**
   * number of searches ran by the datafeed
   * @aliases sc, searchCount
   */
  "search.count"?: string;
  /**
   * the total search time
   * @aliases st, searchTime
   */
  "search.time"?: string;
  /**
   * the average search time per bucket (millisecond)
   * @aliases sba, searchBucketAvg
   */
  "search.bucket_avg"?: string;
  /**
   * the exponential average search time per hour (millisecond)
   * @aliases seah, searchExpAvgHour
   */
  //Node info
  "search.exp_avg_hour"?: string;
  /**
   * id of the assigned node
   * @aliases ni, nodeId
   */
  "node.id"?: string;
  /**
   * name of the assigned node
   * @aliases nn, nodeName
   */
  "node.name"?: string;
  /**
   * ephemeral id of the assigned node
   * @aliases ne, nodeEphemeralId
   */
  "node.ephemeral_id"?: string;
  /**
   * network address of the assigned node
   * @aliases na, nodeAddress
   */
  "node.address"?: string;
}
