@rest_spec_name("ml.estimate_model_memory")
class EstimateModelMemoryRequest extends RequestBase {
	analysis_config: AnalysisConfig;
	overall_cardinality: Dictionary<Field, long>;
	max_bucket_cardinality: Dictionary<Field, long>;
}
