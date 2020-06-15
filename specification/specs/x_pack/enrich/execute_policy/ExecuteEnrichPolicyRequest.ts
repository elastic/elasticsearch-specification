@rest_spec_name("enrich.execute_policy")
class ExecuteEnrichPolicyRequest extends RequestBase {
	@request_parameter()
	wait_for_completion: boolean;
}
