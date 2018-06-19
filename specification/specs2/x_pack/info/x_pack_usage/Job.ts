class Job {
	job_id: string;
	job_type: string;
	description: string;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	create_time: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	finished_time: Date;
	analysis_config: AnalysisConfig;
	analysis_limits: AnalysisLimits;
	background_persist_interval: Time;
	data_description: DataDescription;
	model_snapshot_retention_days: long;
	model_snapshot_id: string;
	results_index_name: string;
	model_plot: ModelPlotConfig;
	renormalization_window_days: long;
	results_retention_days: long;
}
