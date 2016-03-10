
/**namespace:QueryDsl.Span.Not */
/**custom_serialization*/
interface SpanNotQuery {
	include: SpanQuery;
	exclude: SpanQuery;
	pre: integer;
	post: integer;
	dist: integer;
}