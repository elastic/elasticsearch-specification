
/**namespace:Search.Validate */
interface ValidateQueryResponse extends Response {
	valid: boolean;
	_shards: ShardsMetaData;
	explanations: ValidationExplanation[];
}