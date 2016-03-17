
/**namespace:Search.Validate */
interface validate_query_response extends response {
	valid: boolean;
	_shards: shards_meta_data;
	explanations: validation_explanation[];
}