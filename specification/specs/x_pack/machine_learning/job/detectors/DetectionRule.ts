class DetectionRule {
	actions: RuleAction[];
	conditions: RuleCondition[];
	scope: Dictionary<Field, FilterRef>;
}
