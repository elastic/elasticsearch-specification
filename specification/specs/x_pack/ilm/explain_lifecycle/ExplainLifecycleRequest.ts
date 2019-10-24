@rest_spec_name("ilm.explain_lifecycle")
class ExplainLifecycleRequest extends RequestBase {
	@request_parameter()
	only_errors: boolean;
	@request_parameter()
	only_managed: boolean;
}
