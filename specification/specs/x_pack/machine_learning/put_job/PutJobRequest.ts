@rest_spec_name("ml.put_job")
class PutJobRequest extends RequestBase {
	analysis_config: AnalysisConfig;
	analysis_limits: AnalysisLimits;
	data_description: DataDescription;
	description: string;
	model_plot: ModelPlotConfig;
	model_snapshot_retention_days: long;
	results_index_name: IndexName;
}
