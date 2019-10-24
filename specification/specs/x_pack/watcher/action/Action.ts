class Action {
	action_type: ActionType;
	name: string;
	throttle_period: Time;
	foreach: string;
	max_iterations: integer;
	transform: TransformContainer;
	condition: ConditionContainer;
}
