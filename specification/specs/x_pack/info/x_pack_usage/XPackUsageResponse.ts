class XPackUsageResponse extends ResponseBase implements IResponse {
	sql: SqlUsage;
	rollup: XPackUsage;
	data_frame: XPackUsage;
	flattened: XPackUsage;
	data_science: XPackUsage;
	index_lifecycle_management: IlmUsage;
	ccr: CcrUsage;
	alerting: AlertingUsage;
	graph: XPackUsage;
	logstash: XPackUsage;
	machine_learning: MachineLearningUsage;
	monitoring: MonitoringUsage;
	security: SecurityUsage;
	vectors: VectorUsage;
	voting_only: XPackUsage;
}
