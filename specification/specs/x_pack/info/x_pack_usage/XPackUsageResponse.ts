class XPackUsageResponse extends ResponseBase implements IResponse {
	sql: SqlUsage;
	rollup: XPackUsage;
	data_frame: XPackUsage;
	flattened: FlattenedUsage;
	data_science: XPackUsage;
	ilm: IlmUsage;
	ccr: CcrUsage;
	watcher: AlertingUsage;
	graph: XPackUsage;
	logstash: XPackUsage;
	ml: MachineLearningUsage;
	monitoring: MonitoringUsage;
	security: SecurityUsage;
	transform: XPackUsage;
	vectors: VectorUsage;
	voting_only: XPackUsage;
	slm: SlmUsage;
	enrich: XPackUsage;
}
