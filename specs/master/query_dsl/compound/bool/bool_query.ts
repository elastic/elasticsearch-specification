
/**namespace:QueryDsl.Compound.Bool */
/**custom_serialization*/
interface bool_query {
	must: query_container[];
	must_not: query_container[];
	should: query_container[];
	filter: query_container[];
	minimum_should_match: minimum_should_match;
	disable_coord: boolean;
	Locked: boolean;
}