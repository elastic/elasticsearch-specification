class WatchRecord {
	condition: ConditionContainer;
	input: InputContainer;
	messages: string[];
	metadata: Dictionary<string, any>;
	node: string;
	result: ExecutionResult;
	state: ActionExecutionState;
	trigger_event: TriggerEventResult;
	user: string;
	watch_id: string;
}
