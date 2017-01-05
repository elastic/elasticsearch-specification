
/**namespace:QueryDsl.Span.Near */
/**custom_serialization*/
interface span_near_query {
	clauses: span_query[];
	slop: integer;
	in_order: boolean;
	collect_payloads: boolean;
}