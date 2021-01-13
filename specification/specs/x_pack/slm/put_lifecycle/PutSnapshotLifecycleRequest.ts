@rest_spec_name("slm.put_lifecycle")
class PutSnapshotLifecycleRequest extends RequestBase {
  pathParts?: {
    policy_id: string;
  }
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
