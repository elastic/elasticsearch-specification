class Job {
	allow_lazy_open: boolean;
	analysis_config: AnalysisConfig;
	analysis_limits: AnalysisLimits;
	background_persist_interval: Time;
	/** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
	create_time: Date;
	data_description: DataDescription;
	description: string;
	/** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
	finished_time: Date;
	job_id: string;
	job_type: string;
	model_plot: ModelPlotConfig;
	model_snapshot_id: string;
	model_snapshot_retention_days: long;
	renormalization_window_days: long;
	results_index_name: string;
	results_retention_days: long;
}
