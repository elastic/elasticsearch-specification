class XPackUsageResponse extends ResponseBase {
	graph: XPackUsage;
	monitoring: MonitoringUsage;
	ml: MachineLearningUsage;
	watcher: AlertingUsage;
	security: SecurityUsage;
}
