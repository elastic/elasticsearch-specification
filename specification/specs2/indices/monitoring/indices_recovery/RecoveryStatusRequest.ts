class RecoveryStatusRequest extends RequestBase {
	@request_parameter()
	detailed: boolean;
	@request_parameter()
	active_only: boolean;
}
