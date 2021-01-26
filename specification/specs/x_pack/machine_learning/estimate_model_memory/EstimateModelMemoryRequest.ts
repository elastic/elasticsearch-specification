@rest_spec_name('ml.estimate_model_memory')
class EstimateModelMemoryRequest extends RequestBase {
  query_parameters?: {}
  body?: {
    analysis_config?: AnalysisConfig
    max_bucket_cardinality?: Dictionary<Field, long>
    overall_cardinality?: Dictionary<Field, long>
  }
}
