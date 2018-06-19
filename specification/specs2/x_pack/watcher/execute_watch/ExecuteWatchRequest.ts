class ExecuteWatchRequest extends RequestBase {
	trigger_data: ScheduleTriggerEvent;
	ignore_condition: boolean;
	record_execution: boolean;
	alternative_input: Map<string, any>;
	action_modes: Map<string, ActionExecutionMode>;
	simulated_actions: SimulatedActions;
	watch: PutWatchRequest;
	@request_parameter()
	debug: boolean;
}
