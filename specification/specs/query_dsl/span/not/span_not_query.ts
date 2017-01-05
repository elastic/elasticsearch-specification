
/**namespace:QueryDsl.Span.Not */
/**custom_serialization*/
interface span_not_query {
	include: span_query;
	exclude: span_query;
	pre: integer;
	post: integer;
	dist: integer;
}