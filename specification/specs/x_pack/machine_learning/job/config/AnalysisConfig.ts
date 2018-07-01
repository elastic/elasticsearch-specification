class AnalysisConfig {
	bucket_span: Time;
	categorization_field_name: Field;
	categorization_filters: string[];
	detectors: Detector[];
	influencers: Field[];
	latency: Time;
	multivariate_by_fields: boolean;
	summary_count_field_name: Field;
}
