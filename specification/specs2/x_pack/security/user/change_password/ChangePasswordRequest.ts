class ChangePasswordRequest extends RequestBase {
	password: string;
	@request_parameter()
	refresh: Refresh;
}
