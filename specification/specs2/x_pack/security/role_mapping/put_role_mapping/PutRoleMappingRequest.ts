@rest_spec_name("xpack.security.put_role_mapping")
class PutRoleMappingRequest extends RequestBase {
	run_as: string[];
	metadata: Map<string, any>;
	enabled: boolean;
	roles: string[];
	rules: RoleMappingRuleBase;
	@request_parameter()
	refresh: Refresh;
}
