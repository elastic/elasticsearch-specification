class ForecastStatistics {
	jobs: long;
	memory_bytes: JobStatistics;
	processing_time_milliseconds: JobStatistics;
	records: JobStatistics;
	status: Dictionary<string, long>;
	total: long;
}
