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

import { Field, Name } from '@_types/common'
import { double } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/** @variants container */
export class DataframeEvaluationContainer {
  /** Classification evaluation evaluates the results of a classification analysis which outputs a prediction that identifies to which of the classes each document belongs. */
  classification?: DataframeEvaluationClassification
  /** Outlier detection evaluates the results of an outlier detection analysis which outputs the probability that each document is an outlier. */
  outlier_detection?: DataframeEvaluationOutlierDetection
  /** Regression evaluation evaluates the results of a regression analysis which outputs a prediction of values. */
  regression?: DataframeEvaluationRegression
}

export class DataframeEvaluationClassification {
  /** The field of the index which contains the ground truth. The data type of this field can be boolean or integer. If the data type is integer, the value has to be either 0 (false) or 1 (true). */
  actual_field: Field
  /** The field in the index which contains the predicted value, in other words the results of the classification analysis. */
  predicted_field?: Field
  /** The field of the index which is an array of documents of the form { "class_name": XXX, "class_probability": YYY }. This field must be defined as nested in the mappings. */
  top_classes_field?: Field
  /** Specifies the metrics that are used for the evaluation. */
  metrics?: DataframeEvaluationClassificationMetrics
}

export class DataframeEvaluationOutlierDetection {
  /** The field of the index which contains the ground truth. The data type of this field can be boolean or integer. If the data type is integer, the value has to be either 0 (false) or 1 (true). */
  actual_field: Field
  /** The field of the index that defines the probability of whether the item belongs to the class in question or not. It’s the field that contains the results of the analysis. */
  predicted_probability_field: Field
  /** Specifies the metrics that are used for the evaluation. */
  metrics?: DataframeEvaluationOutlierDetectionMetrics
}

export class DataframeEvaluationRegression {
  /** The field of the index which contains the ground truth. The data type of this field must be numerical. */
  actual_field: Field
  /** The field in the index that contains the predicted value, in other words the results of the regression analysis. */
  predicted_field: Field
  /** Specifies the metrics that are used for the evaluation. For more information on mse, msle, and huber, consult the Jupyter notebook on regression loss functions. */
  metrics?: DataframeEvaluationRegressionMetrics
}

export class DataframeEvaluationMetrics {
  /** The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve. It is calculated for a specific class (provided as "class_name") treated as positive. */
  auc_roc?: DataframeEvaluationClassificationMetricsAucRoc
  /** Precision of predictions (per-class and average). */
  precision?: Dictionary<string, UserDefinedValue>
  /** Recall of predictions (per-class and average). */
  recall?: Dictionary<string, UserDefinedValue>
}

export class DataframeEvaluationClassificationMetrics extends DataframeEvaluationMetrics {
  /** Accuracy of predictions (per-class and overall). */
  accuracy?: Dictionary<string, UserDefinedValue>
  /** Multiclass confusion matrix. */
  multiclass_confusion_matrix?: Dictionary<string, UserDefinedValue>
}

export class DataframeEvaluationOutlierDetectionMetrics extends DataframeEvaluationMetrics {
  /** Accuracy of predictions (per-class and overall). */
  confusion_matrix?: Dictionary<string, UserDefinedValue>
}

export class DataframeEvaluationClassificationMetricsAucRoc {
  /** Name of the only class that is treated as positive during AUC ROC calculation. Other classes are treated as negative ("one-vs-all" strategy). All the evaluated documents must have class_name in the list of their top classes. */
  class_name?: Name
  /** Whether or not the curve should be returned in addition to the score. Default value is false. */
  include_curve?: boolean
}

export class DataframeEvaluationRegressionMetrics {
  /**
   * Average squared difference between the predicted values and the actual (ground truth) value. For more information, read this wiki article.
   * @doc_url https://en.wikipedia.org/wiki/Mean_squared_error
   */
  mse?: Dictionary<string, UserDefinedValue>
  /** Average squared difference between the logarithm of the predicted values and the logarithm of the actual (ground truth) value. */
  msle?: DataframeEvaluationRegressionMetricsMsle
  /**
   * Pseudo Huber loss function.
   * @doc_url https://en.wikipedia.org/wiki/Huber_loss#Pseudo-Huber_loss_function
   */
  huber?: DataframeEvaluationRegressionMetricsHuber
  /**
   * Proportion of the variance in the dependent variable that is predictable from the independent variables.
   * @doc_url https://en.wikipedia.org/wiki/Coefficient_of_determination
   */
  r_squared?: Dictionary<string, UserDefinedValue>
}

export class DataframeEvaluationRegressionMetricsMsle {
  /** Defines the transition point at which you switch from minimizing quadratic error to minimizing quadratic log error. Defaults to 1. */
  offset?: double
}

export class DataframeEvaluationRegressionMetricsHuber {
  /** Approximates 1/2 (prediction - actual)2 for values much less than delta and approximates a straight line with slope delta for values much larger than delta. Defaults to 1. Delta needs to be greater than 0. */
  delta?: double
}
