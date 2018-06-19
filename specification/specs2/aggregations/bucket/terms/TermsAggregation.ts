class TermsAggregation {
	field: Field;
	script: Script;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: TermsOrder[];
	include: TermsInclude;
	exclude: TermsExclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_count_error: boolean;
	missing: any;
}
