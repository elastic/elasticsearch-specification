class InvalidateUserAccessTokenResponse extends ResponseBase implements IResponse {
	invalidated_tokens: long;
	previously_invalidated_tokens: long;
	error_count: long;
	error_details: ErrorCause[];
}
