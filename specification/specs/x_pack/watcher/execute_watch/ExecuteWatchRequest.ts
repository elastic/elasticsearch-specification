@rest_spec_name("watcher.execute_watch")
class ExecuteWatchRequest extends RequestBase {
	@request_parameter()
	debug: boolean;
	action_modes: Dictionary<string, ActionExecutionMode>;
	alternative_input: Dictionary<string, any>;
	ignore_condition: boolean;
	record_execution: boolean;
	simulated_actions: SimulatedActions;
	trigger_data: ScheduleTriggerEvent;
	watch: Watch;
}
