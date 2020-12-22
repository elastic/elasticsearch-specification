@rest_spec_name("slm.put_lifecycle")
class PutSnapshotLifecycleRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    config?: SnapshotLifecycleConfig;
    name?: string;
    repository?: string;
    retention?: SnapshotRetentionConfiguration;
    schedule?: CronExpression;
  }
}
