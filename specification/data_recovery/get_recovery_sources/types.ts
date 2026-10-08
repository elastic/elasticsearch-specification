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

export class RecoverySource {
  /**
   * Whether the logical source was completely captured in the recovery point.
   * For a data stream, this includes its backing and failure-store indices.
   */
  complete: boolean
  /** The name of the index or data stream. */
  name: string
  /** The type of logical source. */
  type: RecoverySourceType
}

export enum RecoverySourceType {
  index,
  data_stream
}
