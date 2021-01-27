class Watch {
  actions: Dictionary<string, Action>
  condition: ConditionContainer
  input: InputContainer
  metadata: Dictionary<string, UserDefinedValue>
  status: WatchStatus
  throttle_period: string
  transform: TransformContainer
  trigger: TriggerContainer
}
