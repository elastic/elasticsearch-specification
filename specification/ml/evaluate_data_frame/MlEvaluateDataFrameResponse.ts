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

import { Dictionary } from '@spec_utils/Dictionary'
import { Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'

/** @variants container */
export class Response {
  body: {
    classification?: DataFrameClassificationSummary
    outlier_detection?: DataFrameOutlierDetectionSummary
    regression?: DataFrameRegressionSummary
  }
}

export class DataFrameOutlierDetectionSummary {
  auc_roc?: DataFrameEvaluationSummaryAucRoc
  precision?: Dictionary<string, double>
  recall?: Dictionary<string, double>
  confusion_matrix?: Dictionary<string, ConfusionMatrixTreshold>
}

export class DataFrameClassificationSummary {
  auc_roc?: DataFrameEvaluationSummaryAucRoc
  accuracy?: DataFrameClassificationSummaryAccuracy
  multiclass_confusion_matrix?: DataFrameClassificationSummaryMulticlassConfusionMatrix
  precision?: DataFrameClassificationSummaryPrecision
  recall?: DataFrameClassificationSummaryRecall
}

export class DataFrameRegressionSummary {
  huber?: DataFrameEvaluationValue
  mse?: DataFrameEvaluationValue
  msle?: DataFrameEvaluationValue
  r_squared?: DataFrameEvaluationValue
}

export class DataFrameEvaluationValue {
  value: double
}

export class DataFrameEvaluationSummaryAucRoc extends DataFrameEvaluationValue {
  curve?: DataFrameEvaluationSummaryAucRocCurveItem[]
}

export class DataFrameEvaluationSummaryAucRocCurveItem {
  tpr: double
  fpr: double
  threshold: double
}

export class DataFrameClassificationSummaryPrecision {
  classes: DataFrameEvaluationClass[]
  avg_precision: double
}

export class DataFrameClassificationSummaryRecall {
  classes: DataFrameEvaluationClass[]
  avg_recall: double
}

export class DataFrameClassificationSummaryAccuracy {
  classes: DataFrameEvaluationClass[]
  overall_accuracy: double
}

export class DataFrameEvaluationClass extends DataFrameEvaluationValue {
  class_name: Name
}

export class DataFrameClassificationSummaryMulticlassConfusionMatrix {
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

export class ConfusionMatrixTreshold {
  /**
   * True Positive
   * @identifier true_positive
   */
  tp: integer
  /**
   * False Positive
   * @identifier false_positive
   */
  fp: integer
  /**
   * True Negative
   * @identifier true_negative
   */
  tn: integer
  /**
   * False Negative
   * @identifier false_negative
   */
  fn: integer
}
