
/**namespace:QueryDsl.Span.Near */
/**custom_serialization*/
interface SpanNearQuery {
	clauses: SpanQuery[];
	slop: integer;
	in_order: boolean;
	collect_payloads: boolean;
}