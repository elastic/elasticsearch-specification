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

import { Names } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class Definition {
  /** Collection of preprocessors */
  preprocessors?: Preprocessor[]
  /** The definition of the trained model. */
  trained_model: TrainedModel
}

/** @variants container */
export class Preprocessor {
  frequency_encoding?: FrequencyEncodingPreprocessor
  one_hot_encoding?: OneHotEncodingPreprocessor
  target_mean_encoding?: TargetMeanEncodingPreprocessor
}

export class FrequencyEncodingPreprocessor {
  field: string
  feature_name: string
  frequency_map: Dictionary<string, double>
}

export class OneHotEncodingPreprocessor {
  field: string
  hot_map: Dictionary<string, string>
}

export class TargetMeanEncodingPreprocessor {
  field: string
  feature_name: string
  target_map: Dictionary<string, double>
  default_value: double
}

export class Input {
  field_names: Names
}

export class TrainedModel {
  /** The definition for a binary decision tree. */
  tree?: TrainedModelTree
  /**
   * The definition of a node in a tree.
   * There are two major types of nodes: leaf nodes and not-leaf nodes.
   * - Leaf nodes only need node_index and leaf_value defined.
   * - All other nodes need split_feature, left_child, right_child, threshold, decision_type, and default_left defined.
   * */
  tree_node?: TrainedModelTreeNode
  /** The definition for an ensemble model */
  ensemble?: Ensemble
}

export class TrainedModelTree {
  classification_labels?: string[]
  feature_names: string[]
  target_type?: string
  tree_structure: TrainedModelTreeNode[]
}

export class TrainedModelTreeNode {
  decision_type?: string
  default_left?: boolean
  leaf_value?: double
  left_child?: integer
  node_index: integer
  right_child?: integer
  split_feature?: integer
  split_gain?: integer
  threshold?: double
}

export class Ensemble {
  aggregate_output?: AggregateOutput
  classification_labels?: string[]
  feature_names?: string[]
  target_type?: string
  trained_models: TrainedModel[]
}

export class AggregateOutput {
  logistic_regression?: Weights
  weighted_sum?: Weights
  weighted_mode?: Weights
  exponent?: Weights
}

export class Weights {
  weights: double
}
