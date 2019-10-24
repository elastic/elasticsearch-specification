class StartBasicLicenseResponse extends AcknowledgedResponseBase implements IResponse {
	acknowledge: Dictionary<string, string[]>;
	basic_was_started: boolean;
	error_message: string;
}
