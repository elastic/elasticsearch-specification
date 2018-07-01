class RequestConfiguration {
	request_timeout: TimeSpan;
	ping_timeout: TimeSpan;
	content_type: string;
	accept: string;
	max_retries: integer;
	force_node: Uri;
	disable_sniff: boolean;
	disable_ping: boolean;
	disable_direct_streaming: boolean;
	allowed_status_codes: integer[];
	basic_authentication_credentials: BasicAuthenticationCredentials;
	enable_http_pipelining: boolean;
	run_as: string;
	client_certificates: any;
	throw_exceptions: boolean;
}
