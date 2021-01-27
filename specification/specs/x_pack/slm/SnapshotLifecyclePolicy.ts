class SnapshotLifecyclePolicy {
  config: SnapshotLifecycleConfig
  name: string
  repository: string
  retention: SnapshotRetentionConfiguration
  schedule: CronExpression
}
