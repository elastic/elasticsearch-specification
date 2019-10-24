@rest_spec_name("watcher.put_watch")
class PutWatchRequest extends RequestBase {
	@request_parameter()
	active: boolean;
	@request_parameter()
	if_primary_term: long;
	@request_parameter()
	if_sequence_number: long;
	@request_parameter()
	version: long;
	actions: Dictionary<string, Action>;
	condition: ConditionContainer;
	input: InputContainer;
	metadata: Dictionary<string, any>;
	throttle_period: string;
	transform: TransformContainer;
	trigger: TriggerContainer;
}
