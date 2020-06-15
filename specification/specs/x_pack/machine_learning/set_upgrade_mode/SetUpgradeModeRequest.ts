@rest_spec_name("ml.set_upgrade_mode")
class SetUpgradeModeRequest extends RequestBase {
	@request_parameter()
	enabled: boolean;
	@request_parameter()
	timeout: Time;
}
