class WatchRecord {
	condition: ConditionContainer;
	input: InputContainer;
	messages: string[];
	metadata: Dictionary<string, any>;
	result: ExecutionResult;
	state: ActionExecutionState;
	trigger_event: TriggerEventResult;
	user: string;
	node: string;
	watch_id: string;
}
