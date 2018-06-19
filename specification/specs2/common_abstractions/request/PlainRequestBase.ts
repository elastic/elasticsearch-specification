class PlainRequestBase<TParameters> extends RequestBase {
	request_configuration: RequestConfiguration;
	pretty: boolean;
	human: boolean;
	error_trace: boolean;
	filter_path: string[];
}
