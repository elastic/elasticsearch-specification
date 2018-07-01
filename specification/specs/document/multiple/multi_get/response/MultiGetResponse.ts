class MultiGetResponse extends ResponseBase {
	is_valid: boolean;
	hits: MultiGetHit<any>[];
}
