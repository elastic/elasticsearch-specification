class ValidateQueryResponse extends ResponseBase implements IResponse {
	explanations: ValidationExplanation[];
	shards: ShardStatistics;
	valid: boolean;
}
