class XPackUsageResponse extends ResponseBase implements IResponse {
	sql: SqlUsage;
	rollup: XPackUsage;
	data_frame: XPackUsage;
	flattened: XPackUsage;
	data_science: XPackUsage;
	ilm: IlmUsage;
	ccr: CcrUsage;
	watcher: AlertingUsage;
	graph: XPackUsage;
	logstash: XPackUsage;
	ml: MachineLearningUsage;
	monitoring: MonitoringUsage;
	security: SecurityUsage;
	vectors: VectorUsage;
	voting_only: XPackUsage;
}
