@rest_spec_name("xpack.watcher.execute_watch")
class ExecuteWatchRequest extends RequestBase {
	trigger_data: ScheduleTriggerEvent;
	ignore_condition: boolean;
	record_execution: boolean;
	alternative_input: Dictionary<string, any>[];
	action_modes: Dictionary<string, ActionExecutionMode>[];
	simulated_actions: SimulatedActions;
	watch: PutWatchRequest;
	@request_parameter()
	debug: boolean;
}
