class StartBasicLicenseResponse extends AcknowledgedResponseBase {
  acknowledge: Dictionary<string, string[]>;
  basic_was_started: boolean;
  error_message: string;
}
