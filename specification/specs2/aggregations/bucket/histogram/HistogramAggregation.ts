class HistogramAggregation {
	field: Field;
	script: Script;
	interval: double;
	min_doc_count: integer;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<double>;
	offset: double;
	missing: double;
}
