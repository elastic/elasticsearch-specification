
/**namespace:QueryDsl.Compound.Bool */
/**custom_serialization*/
interface BoolQuery {
	must: QueryContainer[];
	must_not: QueryContainer[];
	should: QueryContainer[];
	filter: QueryContainer[];
	minimum_should_match: MinimumShouldMatch;
	disable_coord: boolean;
	Locked: boolean;
}