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

/**
 * In some places in the specification an object consists of the union of a set of known properties
 * and a set of runtime injected properties. Meaning that object should theoretically extend Dictionary but expose
 * a set of known keys and possibly. The object might already be part of an object graph and have a parent class.
 * This puts it into a bind that needs a client specific solution.
 * We therefore document the requirement to behave like a dictionary for unknown properties with this interface.
 * @behavior Defines a trait that any unknown property for the class should be typed to TValue
 */
export interface AdditionalProperties<TKey, TValue> {}

/**
 * In some places in the specification an object consists of a static set of properties and a single additional property
 * with an arbitrary name but a statically defined type. This is typically used for configurations associated
 * to a single field. Meaning that object should theoretically extend SingleKeyDictionary but expose
 * a set of known keys. And possibly the object might already be part of an object graph and have a parent class.
 * This puts it into a bind that needs a client specific solution.
 * We therefore document the requirement to accept a single unknown property with this interface.
 * @behavior Defines a trait that a single unknown property for the class should be typed to TValue
 */
export interface AdditionalProperty<TKey, TValue> {}

/**
 * Implements a set of common query parameters all API's support.
 * Since these can break the request structure these are listed explicitly as a behavior.
 * Its up to individual clients to define support although `error_trace` and `pretty` are
 * recommended as a minimum.
 * @behavior Defines a common set of query parameters all API's support that alter the overall response.
 */
export interface CommonQueryParameters {
  /**
   * When set to `true` Elasticsearch will include the full stack trace of errors
   * when they occur.
   * @server_default false
   */
  error_trace?: boolean
  /**
   * Comma-separated list of filters in dot notation which reduce the response
   * returned by Elasticsearch.
   */
  filter_path?: string | string[]
  /**
   * When set to `true` will return statistics in a format suitable for humans.
   * For example `"exists_time": "1h"` for humans and
   * `"exists_time_in_millis": 3600000` for computers. When disabled the human
   * readable values will be omitted. This makes sense for responses being consumed
   * only by machines.
   * @server_default false
   */
  human?: boolean
  /**
   * If set to `true` the returned JSON will be "pretty-formatted". Only use
   * this option for debugging only.
   * @server_default false
   */
  pretty?: boolean
}

/**
 * Implements a set of common query parameters all Cat API's support.
 * Since these can break the request structure these are listed explicitly as a behavior.
 * @behavior Defines a common set of query parameters all Cat API's support that alter the overall response.
 */
export interface CommonCatQueryParameters {
  /**
   * Specifies the format to return the columnar data in, can be set to
   * `text`, `json`, `cbor`, `yaml`, or `smile`.
   * @server_default text
   */
  format?: string
  /**
   * When set to `true` will output available columns. This option
   * can't be combined with any other query string option.
   * @server_default false
   */
  help?: boolean
  /**
   * When set to `true` will enable verbose output.
   * @server_default false
   */
  v?: boolean
  /**
   * Sets the units for columns that contain a byte-size value.
   * Note that byte-size value units work in terms of powers of 1024. For instance `1kb` means 1024 bytes, not 1000 bytes.
   * If omitted, byte-size values are rendered with a suffix such as `kb`, `mb`, or `gb`, chosen such that the numeric value of the column is as small as possible whilst still being at least `1.0`.
   * If given, byte-size values are rendered as an integer with no suffix, representing the value of the column in the chosen unit.
   * Values that are not an exact multiple of the chosen unit are rounded down.
   */
  bytes?: Bytes
  /**
   * Sets the units for columns that contain a size value which is not a byte-size value.
   * If omitted, size values are rendered with a suffix such as `k`, `m`, or `g`, chosen such that the numeric value of the column is as small as possible whilst still being at least `1.0`.
   * If given, size values are rendered as an integer with no suffix, representing the value of the column in the chosen unit.
   * Values that are not an exact multiple of the chosen unit are rounded down.
   */
  size?: '' | 'k' | 'm' | 'g' | 't' | 'p'
  /**
   * Sets the units for columns that contain a time duration.
   * If omitted, time duration values are rendered with a suffix such as `ms`, `s`, `m` or `h`, chosen such that the numeric value of the column is as small as possible whilst still being at least `1.0`.
   * If given, time duration values are rendered as an integer with no suffix.
   * Values that are not an exact multiple of the chosen unit are rounded down.
   */
  time?: TimeUnit
}

/**
 * A class that implements `OverloadOf` should have the exact same properties with the same types.
 * It can change if a property is required or not. There is no need to port the descriptions
 * and js doc tags, the compiler will do that for you.
 * @behavior Defines a class that is the "read" version of a definition used when writing a property.
 */
export interface OverloadOf<TDefinition> {}
