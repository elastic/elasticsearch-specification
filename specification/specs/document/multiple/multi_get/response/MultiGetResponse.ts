class MultiGetResponse extends ResponseBase implements IResponse {
	hits: MultiGetHit<any>[];
	is_valid: boolean;
}
