class XPackUsageResponse extends ResponseBase {
  watcher: AlertingUsage
  ccr: CcrUsage
  data_frame: XPackUsage
  data_science: XPackUsage
  enrich: XPackUsage
  flattened: FlattenedUsage
  graph: XPackUsage
  ilm: IlmUsage
  logstash: XPackUsage
  ml: MachineLearningUsage
  monitoring: MonitoringUsage
  rollup: XPackUsage
  security: SecurityUsage
  slm: SlmUsage
  sql: SqlUsage
  transform: XPackUsage
  vectors: VectorUsage
  voting_only: XPackUsage
}
