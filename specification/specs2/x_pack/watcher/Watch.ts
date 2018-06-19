class Watch {
	metadata: Map<string, any>;
	input: InputContainer;
	condition: ConditionContainer;
	trigger: TriggerContainer;
	transform: TransformContainer;
	@prop_serializer("ActionsJsonConverter")
	actions: Map<string, Action>;
	status: WatchStatus;
	throttle_period: string;
}
