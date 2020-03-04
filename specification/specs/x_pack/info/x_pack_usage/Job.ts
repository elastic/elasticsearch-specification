class Job {
	analysis_config: AnalysisConfig;
	analysis_limits: AnalysisLimits;
	background_persist_interval: Time;
	create_time: Date;
	data_description: DataDescription;
	description: string;
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
