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

import { Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class DataframeOutlierDetectionSummary {
  /**
   * The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve.
   * @server_default {"include_curve": false}
   */
  auc_roc?: DataframeEvaluationSummaryAucRoc
  /**
   * Set the different thresholds of the outlier score at where the metric is calculated.
   */
  precision?: Dictionary<string, double>
  /**
   * Set the different thresholds of the outlier score at where the metric is calculated.
   */
  recall?: Dictionary<string, double>
  /**
   * Set the different thresholds of the outlier score at where the metrics (`tp` - true positive, `fp` - false positive, `tn` - true negative, `fn` - false negative) are calculated.
   */
  confusion_matrix?: Dictionary<string, ConfusionMatrixThreshold>
}

export class DataframeClassificationSummary {
  /**
   * The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve.
   * It is calculated for a specific class (provided as "class_name") treated as positive.
   */
  auc_roc?: DataframeEvaluationSummaryAucRoc
  /**
   * Accuracy of predictions (per-class and overall).
   */
  accuracy?: DataframeClassificationSummaryAccuracy
  /**
   * Multiclass confusion matrix.
   */
  multiclass_confusion_matrix?: DataframeClassificationSummaryMulticlassConfusionMatrix
  /**
   * Precision of predictions (per-class and average).
   */
  precision?: DataframeClassificationSummaryPrecision
  /**
   * Recall of predictions (per-class and average).
   */
  recall?: DataframeClassificationSummaryRecall
}

export class DataframeRegressionSummary {
  /**
   * Pseudo Huber loss function.
   */
  huber?: DataframeEvaluationValue
  /**
   * Average squared difference between the predicted values and the actual (`ground truth`) value.
   */
  mse?: DataframeEvaluationValue
  /**
   * Average squared difference between the logarithm of the predicted values and the logarithm of the actual (`ground truth`) value.
   */
  msle?: DataframeEvaluationValue
  /**
   * Proportion of the variance in the dependent variable that is predictable from the independent variables.
   */
  r_squared?: DataframeEvaluationValue
}

export class DataframeEvaluationValue {
  value: double
}

export class DataframeEvaluationSummaryAucRoc extends DataframeEvaluationValue {
  curve?: DataframeEvaluationSummaryAucRocCurveItem[]
}

export class DataframeEvaluationSummaryAucRocCurveItem {
  tpr: double
  fpr: double
  threshold: double
}

export class DataframeClassificationSummaryPrecision {
  classes: DataframeEvaluationClass[]
  avg_precision: double
}

export class DataframeClassificationSummaryRecall {
  classes: DataframeEvaluationClass[]
  avg_recall: double
}

export class DataframeClassificationSummaryAccuracy {
  classes: DataframeEvaluationClass[]
  overall_accuracy: double
}

export class DataframeEvaluationClass extends DataframeEvaluationValue {
  class_name: Name
}

export class DataframeClassificationSummaryMulticlassConfusionMatrix {
  confusion_matrix: ConfusionMatrixItem[]
  other_actual_class_count: integer
}

export class ConfusionMatrixItem {
  actual_class: Name
  actual_class_doc_count: integer
  predicted_classes: ConfusionMatrixPrediction[]
  other_predicted_class_doc_count: integer
}

export class ConfusionMatrixPrediction {
  predicted_class: Name
  count: integer
}

export class ConfusionMatrixThreshold {
  /**
   * True Positive
   * @codegen_name true_positive
   */
  tp: integer
  /**
   * False Positive
   * @codegen_name false_positive
   */
  fp: integer
  /**
   * True Negative
   * @codegen_name true_negative
   */
  tn: integer
  /**
   * False Negative
   * @codegen_name false_negative
   */
  fn: integer
}
