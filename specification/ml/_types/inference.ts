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

import { Field, IndexName } from '@_types/common'
import { double, integer } from '@_types/Numeric'

/**
 * Inference configuration provided when storing the model config
 * @variants container
 */
export class InferenceConfigCreateContainer {
  /** Regression configuration for inference. */
  regression?: RegressionInferenceOptions
  /** Classification configuration for inference. */
  classification?: ClassificationInferenceOptions
  /**
   * Text classification configuration for inference.
   * @since 8.0.0
   * */
  text_classification?: TextClassificationInferenceOptions
  /**
   * Zeroshot classification configuration for inference.
   * @since 8.0.0
   */
  zero_shot_classification?: ZeroShotClassificationInferenceOptions
  /**
   * Fill mask configuration for inference.
   * @since 8.0.0
   */
  fill_mask?: FillMaskInferenceOptions
  /**
   * Named entity recognition configuration for inference.
   * @since 8.0.0
   * */
  ner?: NerInferenceOptions
  /**
   * Pass through configuration for inference.
   * @since 8.0.0
   */
  pass_through?: PassThroughInferenceOptions
  /**
   * Text embedding configuration for inference.
   * @since 8.0.0
   * */
  text_embedding?: TextEmbeddingInferenceOptions
  /**
   * Text expansion configuration for inference.
   * @since 8.8.0
   * */
  text_expansion?: TextExpansionInferenceOptions
  /**
   * Question answering configuration for inference.
   * @since 8.3.0
   */
  question_answering?: QuestionAnsweringInferenceOptions
}

export class RegressionInferenceOptions {
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: Field
  /**
   * Specifies the maximum number of feature importance values per document.
   * @doc_id ml-feature-importance
   * @server_default 0
   */
  num_top_feature_importance_values?: integer
}

export class ClassificationInferenceOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /**
   * Specifies the maximum number of feature importance values per document.
   * @server_default 0
   * @doc_id ml-feature-importance
   */
  num_top_feature_importance_values?: integer
  /** Specifies the type of the predicted field to write. Acceptable values are: string, number, boolean. When boolean is provided 1.0 is transformed to true and 0.0 to false. */
  prediction_field_type?: string
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Specifies the field to which the top classes are written. Defaults to top_classes. */
  top_classes_results_field?: string
}

/**
 * Tokenization options stored in inference configuration
 * @variants container
 **/
export class TokenizationConfigContainer {
  /** Indicates BERT tokenization and its options */
  bert?: NlpBertTokenizationConfig
  /**
   * Indicates MPNET tokenization and its options
   * @since 8.1.0
   * */
  mpnet?: NlpBertTokenizationConfig
  /**
   * Indicates RoBERTa tokenization and its options
   * @since 8.2.0
   * */
  roberta?: NlpRobertaTokenizationConfig
}

/** BERT and MPNet tokenization configuration options */
export class NlpBertTokenizationConfig {
  /**
   * Should the tokenizer lower case the text
   * @server_default false
   */
  do_lower_case?: boolean
  /**
   * Is tokenization completed with special tokens
   * @server_default true
   */
  with_special_tokens?: boolean
  /**
   * Maximum input sequence length for the model
   * @server_default 512
   */
  max_sequence_length?: integer
  /**
   * Should tokenization input be automatically truncated before sending to the model for inference
   * @server_default first
   */
  truncate?: TokenizationTruncate
  /**
   * Tokenization spanning options. Special value of -1 indicates no spanning takes place
   * @server_default -1
   */
  span?: integer
}

/** RoBERTa tokenization configuration options */
export class NlpRobertaTokenizationConfig {
  /**
   * Should the tokenizer prefix input with a space character
   * @server_default false
   */
  add_prefix_space?: boolean
  /**
   * Is tokenization completed with special tokens
   * @server_default true
   */
  with_special_tokens?: boolean
  /**
   * Maximum input sequence length for the model
   * @server_default 512
   */
  max_sequence_length?: integer
  /**
   * Should tokenization input be automatically truncated before sending to the model for inference
   * @server_default first
   */
  truncate?: TokenizationTruncate
  /**
   * Tokenization spanning options. Special value of -1 indicates no spanning takes place
   * @server_default -1
   */
  span?: integer
}

/** Text classification configuration options */
export class TextClassificationInferenceOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Classification labels to apply other than the stored labels. Must have the same deminsions as the default configured labels */
  classification_labels?: string[]
}

/** Zero shot classification configuration options */
export class ZeroShotClassificationInferenceOptions {
  /** The tokenization options to update when inferring */
  tokenization?: TokenizationConfigContainer
  /** Hypothesis template used when tokenizing labels for prediction
   * @server_default "This example is {}."
   */
  hypothesis_template?: string
  /**
   * The zero shot classification labels indicating entailment, neutral, and contradiction
   * Must contain exactly and only entailment, neutral, and contradiction
   */
  classification_labels: string[]
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Indicates if more than one true label exists.
   * @server_default false
   **/
  multi_label?: boolean
  /** The labels to predict. */
  labels?: string[]
}

/** Pass through configuration options */
export class PassThroughInferenceOptions {
  /** The tokenization options */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  vocabulary?: Vocabulary
}

export class Vocabulary {
  index: IndexName
}

/** Text embedding inference options */
export class TextEmbeddingInferenceOptions {
  /** The number of dimensions in the embedding output */
  embedding_size?: integer
  /** The tokenization options */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

/** Text expansion inference options */
export class TextExpansionInferenceOptions {
  /** The tokenization options */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

/** Named entity recognition options */
export class NerInferenceOptions {
  /** The tokenization options */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** The token classification labels. Must be IOB formatted tags */
  classification_labels?: string[]
  vocabulary?: Vocabulary
}

/** Fill mask inference options */
export class FillMaskInferenceOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options to update when inferring */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

/** Question answering inference options */
export class QuestionAnsweringInferenceOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options to update when inferring */
  tokenization?: TokenizationConfigContainer
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** The maximum answer length to consider */
  max_answer_length?: integer
}

// Update containers that may only allow a subset of the options

/** @variants container */
export class InferenceConfigUpdateContainer {
  /** Regression configuration for inference. */
  regression?: RegressionInferenceOptions
  /** Classification configuration for inference. */
  classification?: ClassificationInferenceOptions
  /** Text classification configuration for inference. */
  text_classification?: TextClassificationInferenceUpdateOptions
  /** Zeroshot classification configuration for inference. */
  zero_shot_classification?: ZeroShotClassificationInferenceUpdateOptions
  /** Fill mask configuration for inference. */
  fill_mask?: FillMaskInferenceUpdateOptions
  /** Named entity recognition configuration for inference. */
  ner?: NerInferenceUpdateOptions
  /** Pass through configuration for inference. */
  pass_through?: PassThroughInferenceUpdateOptions
  /** Text embedding configuration for inference. */
  text_embedding?: TextEmbeddingInferenceUpdateOptions
  /** Text expansion configuration for inference. */
  text_expansion?: TextExpansionInferenceUpdateOptions
  /** Question answering configuration for inference */
  question_answering?: QuestionAnsweringInferenceUpdateOptions
}

/** @variants container */
export class NlpInferenceConfigUpdateContainer {
  /** Text classification configuration for inference. */
  text_classification?: TextClassificationInferenceUpdateOptions
  /** Zeroshot classification configuration for inference. */
  zero_shot_classification?: ZeroShotClassificationInferenceUpdateOptions
  /** Fill mask configuration for inference. */
  fill_mask?: FillMaskInferenceUpdateOptions
  /** Named entity recognition configuration for inference. */
  ner?: NerInferenceUpdateOptions
  /** Pass through configuration for inference. */
  pass_through?: PassThroughInferenceUpdateOptions
  /** Text embedding configuration for inference. */
  text_embedding?: TextEmbeddingInferenceUpdateOptions
  /** Text expansion configuration for inference. */
  text_expansion?: TextExpansionInferenceUpdateOptions
  /** Question answering configuration for inference */
  question_answering?: QuestionAnsweringInferenceUpdateOptions
}

/** @variants container */
export class NlpTokenizationUpdateContainer {
  /** Update the configured BERT tokenizer options */
  bert?: NlpTokenizationUpdateOptions
  /** Update the configured MPNet tokenizer options */
  mpnet?: NlpTokenizationUpdateOptions
  /** Update the configured RoBERTa tokenizer options */
  roberta?: NlpTokenizationUpdateOptions
}

export enum TokenizationTruncate {
  first,
  second,
  none
}

export class NlpTokenizationUpdateOptions {
  /** Truncate options to apply */
  truncate?: TokenizationTruncate
  /** Span options to apply */
  span?: integer
}

export class TextClassificationInferenceUpdateOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Classification labels to apply other than the stored labels. Must have the same deminsions as the default configured labels */
  classification_labels?: string[]
}

export class ZeroShotClassificationInferenceUpdateOptions {
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Update the configured multi label option. Indicates if more than one true label exists. Defaults to the configured value. */
  multi_label?: boolean
  /** The labels to predict. */
  labels: string[]
}

export class PassThroughInferenceUpdateOptions {
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

export class TextEmbeddingInferenceUpdateOptions {
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

export class TextExpansionInferenceUpdateOptions {
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

export class NerInferenceUpdateOptions {
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

export class FillMaskInferenceUpdateOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
}

export class QuestionAnsweringInferenceUpdateOptions {
  /** The question to answer given the inference context */
  question: string
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** The maximum answer length to consider for extraction */
  max_answer_length?: integer
}

export class TrainedModelEntities {
  class_name: string
  class_probability: double
  entity: string
  start_pos: integer
  end_pos: integer
}
export class TopClassEntry {
  class_name: string
  class_probability: double
  class_score: double
}

export class TrainedModelInferenceClassImportance {
  class_name: string
  importance: double
}

export class TrainedModelInferenceFeatureImportance {
  feature_name: string
  importance?: double
  classes?: TrainedModelInferenceClassImportance[]
}

export type PredictedValue = string | double | boolean | integer

export class InferenceResponseResult {
  /**
   * If the model is trained for named entity recognition (NER) tasks, the response contains the recognized entities.
   */
  entities?: TrainedModelEntities[]
  /**
   * Indicates whether the input text was truncated to meet the model's maximum sequence length limit. This property
   * is present only when it is true.
   */
  is_truncated?: boolean
  /**
   * If the model is trained for a text classification or zero shot classification task, the response is the
   * predicted class.
   * For named entity recognition (NER) tasks, it contains the annotated text output.
   * For fill mask tasks, it contains the top prediction for replacing the mask token.
   * For text embedding tasks, it contains the raw numerical text embedding values.
   * For regression models, its a numerical value
   * For classification models, it may be an integer, double, boolean or string depending on prediction type
   */
  predicted_value?: PredictedValue[]
  /**
   * For fill mask tasks, the response contains the input text sequence with the mask token replaced by the predicted
   * value.
   * Additionally
   */
  predicted_value_sequence?: string
  /**
   * Specifies a probability for the predicted value.
   */
  prediction_probability?: double
  /**
   * Specifies a confidence score for the predicted value.
   */
  prediction_score?: double
  /**
   * For fill mask, text classification, and zero shot classification tasks, the response contains a list of top
   * class entries.
   */
  top_classes?: TopClassEntry[]
  /**
   * If the request failed, the response contains the reason for the failure.
   */
  warning?: string
  /**
   * The feature importance for the inference results. Relevant only for classification or regression models
   */
  feature_importance?: TrainedModelInferenceFeatureImportance[]
}
