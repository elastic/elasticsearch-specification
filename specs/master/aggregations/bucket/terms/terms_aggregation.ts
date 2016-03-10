
/**namespace:Aggregations.Bucket.Terms */
interface TermsAggregation {
	field: Field;
	script: Script;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: TermsOrder[];
	include: TermsIncludeExclude;
	exclude: TermsIncludeExclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_error_count: boolean;
	missing: string;
}