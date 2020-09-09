class BoolQuery {
  filter: QueryContainer[];
  minimum_should_match: MinimumShouldMatch;
  must: QueryContainer[];
  must_not: QueryContainer[];
  should: QueryContainer[];
  _name: string;
}
