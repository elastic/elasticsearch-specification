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

import { ByteSize, Id, Name } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class Memory {
  attributes: Dictionary<string, string>
  /**
   * Contains Java Virtual Machine (JVM) statistics for the node.
   */
  jvm: JvmStats
  /**
   * Contains statistics about memory usage for the node.
   */
  mem: MemStats
  /**
   * Human-readable identifier for the node. Based on the Node name setting setting.
   */
  name: Name
  /**
   * Roles assigned to the node.
   */
  roles: string[]
  /**
   * The host and port where transport HTTP connections are accepted.
   */
  transport_address: TransportAddress
  ephemeral_id: Id
}

export class JvmStats {
  /** Maximum amount of memory available for use by the heap. */
  heap_max?: ByteSize
  /** Maximum amount of memory, in bytes, available for use by the heap. */
  heap_max_in_bytes: integer
  /** Amount of Java heap currently being used for caching inference models. */
  java_inference?: ByteSize
  /** Amount of Java heap, in bytes, currently being used for caching inference models. */
  java_inference_in_bytes: integer
  /** Maximum amount of Java heap to be used for caching inference models. */
  java_inference_max?: ByteSize
  /** Maximum amount of Java heap, in bytes, to be used for caching inference models. */
  java_inference_max_in_bytes: integer
}

export class MemStats {
  /**
   * If the amount of physical memory has been overridden using the es.total_memory_bytes system property
   * then this reports the overridden value. Otherwise it reports the same value as total.
   */
  adjusted_total?: ByteSize
  /**
   * If the amount of physical memory has been overridden using the `es.total_memory_bytes` system property
   * then this reports the overridden value in bytes. Otherwise it reports the same value as `total_in_bytes`.
   */
  adjusted_total_in_bytes: integer
  /**
   * Total amount of physical memory.
   */
  total?: ByteSize
  /**
   * Total amount of physical memory in bytes.
   */
  total_in_bytes: integer
  /**
   * Contains statistics about machine learning use of native memory on the node.
   */
  ml: MemMlStats
}

export class MemMlStats {
  /** Amount of native memory set aside for anomaly detection jobs. */
  anomaly_detectors?: ByteSize
  /** Amount of native memory, in bytes, set aside for anomaly detection jobs. */
  anomaly_detectors_in_bytes: integer
  /** Amount of native memory set aside for data frame analytics jobs. */
  data_frame_analytics?: ByteSize
  /** Amount of native memory, in bytes, set aside for data frame analytics jobs. */
  data_frame_analytics_in_bytes: integer
  /** Maximum amount of native memory (separate to the JVM heap) that may be used by machine learning native processes. */
  max?: ByteSize
  /** Maximum amount of native memory (separate to the JVM heap), in bytes, that may be used by machine learning native processes. */
  max_in_bytes: integer
  /** Amount of native memory set aside for loading machine learning native code shared libraries. */
  native_code_overhead?: ByteSize
  /** Amount of native memory, in bytes, set aside for loading machine learning native code shared libraries. */
  native_code_overhead_in_bytes: integer
  /** Amount of native memory set aside for trained models that have a PyTorch model_type. */
  native_inference?: ByteSize
  /** Amount of native memory, in bytes, set aside for trained models that have a PyTorch model_type. */
  native_inference_in_bytes: integer
}
