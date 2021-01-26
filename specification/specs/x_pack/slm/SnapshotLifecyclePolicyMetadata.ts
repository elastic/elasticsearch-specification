class SnapshotLifecyclePolicyMetadata {
  in_progress: SnapshotLifecycleInProgress
  last_failure: SnapshotLifecycleInvocationRecord
  last_success: SnapshotLifecycleInvocationRecord
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  modified_date_millis: Date
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  next_execution_millis: Date
  policy: SnapshotLifecyclePolicy
  version: integer
}
