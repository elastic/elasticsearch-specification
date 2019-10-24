class UpdateResponse<TDocument> extends ResponseBase {
	is_valid: boolean;
	get: InlineGet<TDocument>;
}
