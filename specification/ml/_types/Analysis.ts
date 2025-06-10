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

import { CharFilter } from '@_types/analysis/char_filters'
import { TokenFilter } from '@_types/analysis/token_filters'
import { Tokenizer } from '@_types/analysis/tokenizers'
import { ByteSize, Field } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { OverloadOf } from '@spec_utils/behaviors'
import { Detector, DetectorRead } from './Detector'

export class AnalysisConfig {
  /**
   *  The size of the interval that the analysis is aggregated into, typically between `5m` and `1h`. This value should be either a whole number of days or equate to a
whole number of buckets in one day. If the anomaly detection job uses a datafeed with aggregations, this value must also be divisible by the interval of the date histogram aggregation.
   * @server_default 5m
   */
  bucket_span?: Duration
  /**
   * If `categorization_field_name` is specified, you can also define the analyzer that is used to interpret the categorization field. This property cannot be used at the same time as `categorization_filters`. The categorization analyzer specifies how the `categorization_field` is interpreted by the categorization process. The `categorization_analyzer` field can be specified either as a string or as an object. If it is a string, it must refer to a built-in analyzer or one added by another plugin.
   */
  categorization_analyzer?: CategorizationAnalyzer
  /**
   * If this property is specified, the values of the specified field will be categorized. The resulting categories must be used in a detector by setting `by_field_name`, `over_field_name`, or `partition_field_name` to the keyword `mlcategory`.
   */
  categorization_field_name?: Field
  /**
   * If `categorization_field_name` is specified, you can also define optional filters. This property expects an array of regular expressions. The expressions are used to filter out matching sequences from the categorization field values. You can use this functionality to fine tune the categorization by excluding sequences from consideration when categories are defined. For example, you can exclude SQL statements that appear in your log files. This property cannot be used at the same time as `categorization_analyzer`. If you only want to define simple regular expression filters that are applied prior to tokenization, setting this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering, use the `categorization_analyzer` property instead and include the filters as pattern_replace character filters. The effect is exactly the same.
   */
  categorization_filters?: string[]
  /**
   * Detector configuration objects specify which data fields a job analyzes. They also specify which analytical functions are used. You can specify multiple detectors for a job. If the detectors array does not contain at least one detector, no analysis can occur and an error is returned.
   */
  detectors: Detector[]
  /**
   * A comma separated list of influencer field names. Typically these can be the by, over, or partition fields that are used in the detector configuration. You might also want to use a field name that is not specifically named in a detector, but is available as part of the input data. When you use multiple detectors, the use of influencers is recommended as it aggregates results for each influencer entity.
   */
  influencers?: Field[]
  /**
   * The size of the window in which to expect data that is out of time order. If you specify a non-zero value, it must be greater than or equal to one second. NOTE: Latency is applicable only when you send data by using the post data API.
   * @server_default 0
   */
  latency?: Duration
  /**
   * Advanced configuration option. Affects the pruning of models that have not been updated for the given time duration. The value must be set to a multiple of the `bucket_span`. If set too low, important information may be removed from the model. For jobs created in 8.1 and later, the default value is the greater of `30d` or 20 times `bucket_span`.
   */
  model_prune_window?: Duration
  /**
   * This functionality is reserved for internal use. It is not supported for use in customer environments and is not subject to the support SLA of official GA features. If set to `true`, the analysis will automatically find correlations between metrics for a given by field value and report anomalies when those correlations cease to hold. For example, suppose CPU and memory usage on host A is usually highly correlated with the same metrics on host B. Perhaps this correlation occurs because they are running a load-balanced application. If you enable this property, anomalies will be reported when, for example, CPU usage on host A is high and the value of CPU usage on host B is low. That is to say, you’ll see an anomaly when the CPU of host A is unusual given the CPU of host B. To use the `multivariate_by_fields` property, you must also specify `by_field_name` in your detector.
   */
  multivariate_by_fields?: boolean
  /**
   * Settings related to how categorization interacts with partition fields.
   */
  per_partition_categorization?: PerPartitionCategorization
  /**
   *  If this property is specified, the data that is fed to the job is expected to be pre-summarized. This property value is the name of the field that contains the count of raw data points that have been summarized. The same `summary_count_field_name` applies to all detectors in the job. NOTE: The `summary_count_field_name` property cannot be used with the `metric` function.
   */
  summary_count_field_name?: Field
}

export class AnalysisConfigRead implements OverloadOf<AnalysisConfig> {
  /**
   * The size of the interval that the analysis is aggregated into, typically between `5m` and `1h`.
   */
  bucket_span: Duration
  /**
   * If `categorization_field_name` is specified, you can also define the analyzer that is used to interpret the categorization field.
   * This property cannot be used at the same time as `categorization_filters`.
   * The categorization analyzer specifies how the `categorization_field` is interpreted by the categorization process.
   */
  categorization_analyzer?: CategorizationAnalyzer
  /**
   * If this property is specified, the values of the specified field will be categorized.
   * The resulting categories must be used in a detector by setting `by_field_name`, `over_field_name`, or `partition_field_name` to the keyword `mlcategory`.
   */
  categorization_field_name?: Field
  /**
   * If `categorization_field_name` is specified, you can also define optional filters.
   * This property expects an array of regular expressions.
   * The expressions are used to filter out matching sequences from the categorization field values.
   */
  categorization_filters?: string[]
  /**
   * An array of detector configuration objects.
   * Detector configuration objects specify which data fields a job analyzes.
   * They also specify which analytical functions are used.
   * You can specify multiple detectors for a job.
   */
  detectors: DetectorRead[]
  /**
   * A comma separated list of influencer field names.
   * Typically these can be the by, over, or partition fields that are used in the detector configuration.
   * You might also want to use a field name that is not specifically named in a detector, but is available as part of the input data.
   * When you use multiple detectors, the use of influencers is recommended as it aggregates results for each influencer entity.
   */
  influencers: Field[]
  /**
   * Advanced configuration option.
   * Affects the pruning of models that have not been updated for the given time duration.
   * The value must be set to a multiple of the `bucket_span`.
   * If set too low, important information may be removed from the model.
   * Typically, set to `30d` or longer.
   * If not set, model pruning only occurs if the model memory status reaches the soft limit or the hard limit.
   * For jobs created in 8.1 and later, the default value is the greater of `30d` or 20 times `bucket_span`.
   */
  model_prune_window?: Duration
  /**
   * The size of the window in which to expect data that is out of time order.
   * Defaults to no latency.
   * If you specify a non-zero value, it must be greater than or equal to one second.
   * @server_default 0
   */
  latency?: Duration
  /**
   * This functionality is reserved for internal use.
   * It is not supported for use in customer environments and is not subject to the support SLA of official GA features.
   * If set to `true`, the analysis will automatically find correlations between metrics for a given by field value and report anomalies when those correlations cease to hold.
   */
  multivariate_by_fields?: boolean
  /**
   * Settings related to how categorization interacts with partition fields.
   */
  per_partition_categorization?: PerPartitionCategorization
  /**
   * If this property is specified, the data that is fed to the job is expected to be pre-summarized.
   * This property value is the name of the field that contains the count of raw data points that have been summarized.
   * The same `summary_count_field_name` applies to all detectors in the job.
   */
  summary_count_field_name?: Field
}

export class PerPartitionCategorization {
  /**
   * To enable this setting, you must also set the `partition_field_name` property to the same value in every detector that uses the keyword `mlcategory`. Otherwise, job creation fails.
   */
  enabled?: boolean
  /**
   * This setting can be set to true only if per-partition categorization is enabled. If true, both categorization and subsequent anomaly detection stops for partitions where the categorization status changes to warn. This setting makes it viable to have a job where it is expected that categorization works well for some partitions but not others; you do not pay the cost of bad categorization forever in the partitions where it works badly.
   */
  stop_on_warn?: boolean
}

export class AnalysisLimits {
  /**
   * The maximum number of examples stored per category in memory and in the results data store. If you increase this value, more examples are available, however it requires that you have more storage available. If you set this value to 0, no examples are stored. NOTE: The `categorization_examples_limit` applies only to analysis that uses categorization.
   * @server_default 4
   */
  categorization_examples_limit?: long
  /**
   * The approximate maximum amount of memory resources that are required for analytical processing. Once this limit is approached, data pruning becomes more aggressive. Upon exceeding this limit, new entities are not modeled. If the `xpack.ml.max_model_memory_limit` setting has a value greater than 0 and less than 1024mb, that value is used instead of the default. The default value is relatively small to ensure that high resource usage is a conscious decision. If you have jobs that are expected to analyze high cardinality fields, you will likely need to use a higher value. If you specify a number instead of a string, the units are assumed to be MiB. Specifying a string is recommended for clarity. If you specify a byte size unit of `b` or `kb` and the number does not equate to a discrete number of megabytes, it is rounded down to the closest MiB. The minimum valid value is 1 MiB. If you specify a value less than 1 MiB, an error occurs. If you specify a value for the `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create jobs that have `model_memory_limit` values greater than that setting value.
   * @server_default 1024mb
   */
  model_memory_limit?: ByteSize
}

export class AnalysisMemoryLimit {
  /**
   * Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes.
   */
  model_memory_limit: string
}

/** @codegen_names name, definition */
export type CategorizationAnalyzer = string | CategorizationAnalyzerDefinition

export class CategorizationAnalyzerDefinition {
  /**
   * One or more character filters. In addition to the built-in character filters, other plugins can provide more character filters. If this property is not specified, no character filters are applied prior to categorization. If you are customizing some other aspect of the analyzer and you need to achieve the equivalent of `categorization_filters` (which are not permitted when some other aspect of the analyzer is customized), add them here as pattern replace character filters.
   */
  char_filter?: Array<CharFilter>
  /**
   * One or more token filters. In addition to the built-in token filters, other plugins can provide more token filters. If this property is not specified, no token filters are applied prior to categorization.
   */
  filter?: Array<TokenFilter>
  /**
   * The name or definition of the tokenizer to use after character filters are applied. This property is compulsory if `categorization_analyzer` is specified as an object. Machine learning provides a tokenizer called `ml_standard` that tokenizes in a way that has been determined to produce good categorization results on a variety of log file formats for logs in English. If you want to use that tokenizer but change the character or token filters, specify "tokenizer": "ml_standard" in your `categorization_analyzer`. Additionally, the `ml_classic` tokenizer is available, which tokenizes in the same way as the non-customizable tokenizer in old versions of the product (before 6.2). `ml_classic` was the default categorization tokenizer in versions 6.2 to 7.13, so if you need categorization identical to the default for jobs created in these versions, specify "tokenizer": "ml_classic" in your `categorization_analyzer`.
   * @ext_doc_id analysis-tokenizers
   */
  tokenizer?: Tokenizer
}
