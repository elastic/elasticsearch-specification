class ValidateQueryResponse extends ResponseBase {
	valid: boolean;
	_shards: ShardStatistics;
	explanations: ValidationExplanation[];
}
