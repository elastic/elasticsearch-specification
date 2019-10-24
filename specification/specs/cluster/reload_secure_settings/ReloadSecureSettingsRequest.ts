@rest_spec_name("nodes.reload_secure_settings")
class ReloadSecureSettingsRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
}
