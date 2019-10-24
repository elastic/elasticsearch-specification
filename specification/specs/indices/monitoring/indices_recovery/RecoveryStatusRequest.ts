@rest_spec_name("indices.recovery")
class RecoveryStatusRequest extends RequestBase {
	@request_parameter()
	active_only: boolean;
	@request_parameter()
	detailed: boolean;
}
