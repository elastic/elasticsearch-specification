class InvalidateApiKeyResponse extends ResponseBase implements IResponse {
	error_count: integer;
	error_details: ErrorCause[];
	invalidated_api_keys: string[];
	previously_invalidated_api_keys: string[];
}
