class Watch {
  actions: Dictionary<string, Action>;
  condition: ConditionContainer;
  input: InputContainer;
  metadata: Dictionary<string, any>;
  status: WatchStatus;
  throttle_period: string;
  transform: TransformContainer;
  trigger: TriggerContainer;
}
