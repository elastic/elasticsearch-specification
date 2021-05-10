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

export class DataframeOutlierDetectionSummary {
  auc_roc?: DataframeEvaluationSummaryAucRoc
  precision?: Dictionary<string, double>
  recall?: Dictionary<string, double>
  confusion_matrix?: Dictionary<string, ConfusionMatrixTreshold>
}

export class DataframeClassificationSummary {
  auc_roc?: DataframeEvaluationSummaryAucRoc
  accuracy?: DataframeClassificationSummaryAccuracy
  multiclass_confusion_matrix?: DataframeClassificationSummaryMulticlassConfusionMatrix
  precision?: DataframeClassificationSummaryPrecision
  recall?: DataframeClassificationSummaryRecall
}

export class DataframeRegressionSummary {
  huber?: DataframeEvaluationValue
  mse?: DataframeEvaluationValue
  msle?: DataframeEvaluationValue
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
