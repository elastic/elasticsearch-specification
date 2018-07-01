class WatchStatus {
	version: integer;
	state: ActivationState;
	last_checked: Date;
	last_met_condition: Date;
	actions: Map<string, ActionStatus>;
}
