class TermsAggregation {
	collect_mode: TermsAggregationCollectMode;
	exclude: TermsExclude;
	execution_hint: TermsAggregationExecutionHint;
	field: Field;
	include: TermsInclude;
	minimum_document_count: integer;
	missing: any;
	order: TermsOrder[];
	script: Script;
	shard_size: integer;
	show_term_doc_count_error: boolean;
	size: integer;
}
