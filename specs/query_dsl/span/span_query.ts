
/**namespace:QueryDsl.Span */
/**custom_serialization*/
interface span_query {
	span_term: span_term_query;
	span_first: span_first_query;
	span_near: span_near_query;
	span_or: span_or_query;
	span_not: span_not_query;
	span_containing: span_containing_query;
	span_within: span_within_query;
	span_multi: span_multi_term_query;
}