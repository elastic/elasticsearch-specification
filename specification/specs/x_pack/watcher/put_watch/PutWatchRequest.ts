@rest_spec_name("xpack.watcher.put_watch")
class PutWatchRequest extends RequestBase {
	metadata: Dictionary<string, any>[];
	trigger: TriggerContainer;
	input: InputContainer;
	throttle_period: string;
	condition: ConditionContainer;
	transform: TransformContainer;
	actions: Dictionary<string, Action>[];
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	active: boolean;
}
