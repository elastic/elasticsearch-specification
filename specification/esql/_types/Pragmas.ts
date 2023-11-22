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

import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

export enum DataPartitioning {
  SHARD,
  SEGMENT,
  DOC
}

export class Pragmas {
  exchange_buffer_size?: integer
  exchange_concurrent_clients?: integer
  enrich_max_workers?: integer
  task_concurrency?: integer
  data_partitioning?: DataPartitioning
  page_size?: integer
  status_interval?: Duration
}
