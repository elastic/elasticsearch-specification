class BoolQuery {
	filter: QueryContainer[];
	locked: boolean;
	minimum_should_match: MinimumShouldMatch;
	must: QueryContainer[];
	must_not: QueryContainer[];
	should: QueryContainer[];
}
