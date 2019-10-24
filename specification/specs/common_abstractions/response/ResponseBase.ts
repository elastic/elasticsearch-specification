class ResponseBase implements IResponse {
	debug_information: string;
	is_valid: boolean;
	server_error: ServerError;
}
