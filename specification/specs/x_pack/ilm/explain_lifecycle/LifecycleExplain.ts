class LifecycleExplain {
  action: string
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  action_time_millis: Date
  age: Time
  failed_step: string
  failed_step_retry_count: integer
  index: IndexName
  is_auto_retryable_error: boolean
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  lifecycle_date_millis: Date
  managed: boolean
  phase: string
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  phase_time_millis: Date
  policy: string
  step: string
  step_info: Dictionary<string, UserDefinedValue>
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  step_time_millis: Date
}
