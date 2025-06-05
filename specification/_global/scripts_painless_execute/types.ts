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

import { IndexName } from '@_types/common'
import { Ip } from '@_types/Networking'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { DateTime } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class PainlessContextSetup {
  /**
   * Document that's temporarily indexed in-memory and accessible from the script.
   */
  document: UserDefinedValue
  /**
   * Index containing a mapping that's compatible with the indexed document.
   * You may specify a remote index by prefixing the index with the remote cluster alias.
   * For example, `remote1:my_index` indicates that you want to run the painless script against the "my_index" index on the "remote1" cluster.
   * This request will be forwarded to the "remote1" cluster if you have configured a connection to that remote cluster.
   *
   * NOTE: Wildcards are not accepted in the index expression for this endpoint.
   * The expression `*:myindex` will return the error "No such remote cluster" and the expression `logs*` or `remote1:logs*` will return the error "index not found".
   */
  index: IndexName
  /**
   * Use this parameter to specify a query for computing a score.
   */
  query?: QueryContainer
}

/**
 * If a painless script fails to execute this is returned on the serialized exception
 */
export class PainlessExecutionPosition {
  offset: integer
  start: integer
  end: integer
}

export enum PainlessContext {
  /** The default context if no other context is specified. */
  painless_test,
  /** Treats scripts as if they were run inside a script query. */
  filter,
  /** Treats scripts as if they were run inside a `script_score` function in a `function_score` query. */
  score,
  /** The context for boolean fields. The script returns a `true` or `false` response. */
  boolean_field,
  /** The context for date fields. `emit` takes a long value and the script returns a sorted list of dates. */
  date_field,
  /** The context for double numeric fields. The script returns a sorted list of double values. */
  double_field,
  /** The context for geo-point fields. `emit` takes two double parameters, the latitude and longitude values, and the script returns an object in GeoJSON format containing the coordinates for the geo point. */
  geo_point_field,
  /** The context for `ip` fields. The script returns a sorted list of IP addresses.  */
  ip_field,
  /** The context for keyword fields. The script returns a sorted list of string values. */
  keyword_field,
  /** The context for long numeric fields. The script returns a sorted list of long values. */
  long_field,
  /** The context for composite runtime fields. The script returns a map of values.*/
  composite_field
}

export class PainlessScript {
  /**
   * Accepts the values from the script valuation.
   * Scripts can call the `emit` method multiple times to `emit` multiple values.
   * The `emit` method applies only to scripts used in a runtime fields context.
   *
   * IMPORTANT: The emit method cannot accept null values. Do not call this method if the referenced fields do not have any values.
   *
   * The signature for`emit` depends on the type of the field. For example:
   *
   * * `boolean`: `emit(boolean)`
   * * `date`: `emit(long)`
   * * `double`: `emit(double)`
   * * `geo_point`: `emit(double lat, double lon)`
   * * `ip`: `emit(String)`
   * * `long`: `emit(long)`
   * * `keyword`: `emit(String)`
   */
  emit: boolean | DateTime | double | string | Ip | long
}
