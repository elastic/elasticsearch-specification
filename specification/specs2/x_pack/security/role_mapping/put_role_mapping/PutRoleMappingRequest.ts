class PutRoleMappingRequest extends RequestBase {
	run_as: string[];
	metadata: Map<string, any>;
	enabled: boolean;
	roles: string[];
	rules: RoleMappingRuleBase;
	@request_parameter()
	refresh: Refresh;
}
