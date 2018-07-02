class Watch {
	metadata: Dictionary<string, any>[];
	input: InputContainer;
	condition: ConditionContainer;
	trigger: TriggerContainer;
	transform: TransformContainer;
	@prop_serializer("ActionsJsonConverter")
	actions: Dictionary<string, Action>[];
	status: WatchStatus;
	throttle_period: string;
}
