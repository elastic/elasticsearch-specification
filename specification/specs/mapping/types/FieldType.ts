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

enum FieldType {
  none = 0,
  geo_point = 1,
  geo_shape = 2,
  ip = 3,
  binary = 4,
  keyword = 5,
  text = 6,
  search_as_you_type = 7,
  date = 8,
  date_nanos = 9,
  boolean = 10,
  completion = 11,
  nested = 12,
  object = 13,
  murmur3 = 14,
  token_count = 15,
  percolator = 16,
  integer = 17,
  long = 18,
  short = 19,
  byte = 20,
  float = 21,
  half_float = 22,
  scaled_float = 23,
  double = 24,
  integer_range = 25,
  float_range = 26,
  long_range = 27,
  double_range = 28,
  date_range = 29,
  ip_range = 30,
  alias = 31,
  join = 32,
  rank_feature = 33,
  rank_features = 34,
  flattened = 35,
  shape = 36,
  histogram = 37,
  constant_keyword = 38
}
