class WatchStatus {
  actions: Dictionary<string, ActionStatus>;
  last_checked: Date;
  last_met_condition: Date;
  state: ActivationState;
  version: integer;
}
