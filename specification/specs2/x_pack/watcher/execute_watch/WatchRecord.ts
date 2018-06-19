class WatchRecord {
	watch_id: string;
	messages: string[];
	state: ActionExecutionState;
	trigger_event: TriggerEventResult;
	condition: ConditionContainer;
	input: InputContainer;
	metadata: Map<string, any>;
	result: ExecutionResult;
}
