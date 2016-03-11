
/**namespace:Aggregations.Bucket.Terms */
interface terms_aggregation {
	field: field;
	script: script;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: terms_order[];
	include: terms_include_exclude;
	exclude: terms_include_exclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_error_count: boolean;
	missing: string;
}