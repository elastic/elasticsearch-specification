@rest_spec_name("xpack.watcher.put_watch")
class PutWatchRequest {
	trigger: TriggerContainer;
	input: InputContainer;
	condition: ConditionContainer;
	actions: Dictionary<string, Action>[];
	metadata: Dictionary<string, any>[];
	throttle_period: string;
	transform: TransformContainer;
	id: Id;
}
