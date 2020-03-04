class ValidateQueryResponse extends ResponseBase implements IResponse {
	explanations: ValidationExplanation[];
	_shards: ShardStatistics;
	valid: boolean;
}
