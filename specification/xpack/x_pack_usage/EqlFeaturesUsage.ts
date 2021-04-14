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

import { uint } from "../../__common/common";

export class EqlFeaturesUsage {
  join: uint;
  joins: EqlFeaturesJoinUsage;
  keys: EqlFeaturesKeysUsage;
  event: uint;
  pipes: EqlFeaturesPipesUsage;
  sequence: uint;
  sequences: EqlFeaturesSequencesUsage;
}

export class EqlFeaturesJoinUsage {
  join_queries_two: uint;
  join_queries_three: uint;
  join_until: uint;
  join_queries_five_or_more: uint;
  join_queries_four: uint;
}

export class EqlFeaturesKeysUsage {
  join_keys_two: uint;
  join_keys_one: uint;
  join_keys_three: uint;
  join_keys_five_or_more: uint;
  join_keys_four: uint;
}

export class EqlFeaturesPipesUsage {
  pipe_tail: uint;
  pipe_head: uint;
}

export class EqlFeaturesSequencesUsage {
  sequence_queries_three: uint;
  sequence_queries_four: uint;
  sequence_queries_two: uint;
  sequence_until: uint;
  sequence_queries_five_or_more: uint;
  sequence_maxspan: uint;
}
