class SpanQuery {
	span_term: SpanTermQuery;
	span_first: SpanFirstQuery;
	span_near: SpanNearQuery;
	span_or: SpanOrQuery;
	span_not: SpanNotQuery;
	span_containing: SpanContainingQuery;
	span_within: SpanWithinQuery;
	span_multi: SpanMultiTermQuery;
	field_masking_span: SpanFieldMaskingQuery;
}
