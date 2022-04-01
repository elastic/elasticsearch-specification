import { Field } from '@_types/common'
import { integer } from '@_types/Numeric'

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
}

export class PipelineAggInferenceConfigUpdateContainer {
  /** Regression configuration for inference. */
  regression?: RegressionInferenceUpdateOptions
  /** Classification configuration for inference. */
  classification?: ClassificationInferenceUpdateOptions
}

export class RegressionInferenceUpdateOptions {
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: Field
  /**
   * Specifies the maximum number of feature importance values per document.
   * @doc_id ml-feature-importance
   * @server_default 0
   */
  num_top_feature_importance_values?: integer
}

export class ClassificationInferenceUpdateOptions {
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

export class NlpRobertaTokenizationUpdateOptions {
  /** The tokenization options to update when inferring */
  tokenization?: NlpTokenizationUpdateOptions
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
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
