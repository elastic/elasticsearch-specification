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

export enum ShardsStatsStage {
  /** The number of shards in the snapshot that were successfully stored in the repository. */
  DONE,
  /** The number of shards in the snapshot that were not successfully stored in the repository. */
  FAILURE,
  /** The number of shards in the snapshot that are in the finalizing stage of being stored in the repository. */
  FINALIZE,
  /** The number of shards in the snapshot that are in the initializing stage of being stored in the repository. */
  INIT,
  /** The number of shards in the snapshot that are in the started stage of being stored in the repository. */
  STARTED
}
