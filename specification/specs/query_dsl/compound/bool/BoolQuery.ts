class BoolQuery {
  filter?: QueryContainer | QueryContainer[]
  minimum_should_match?: MinimumShouldMatch
  must?: QueryContainer | QueryContainer[]
  must_not?: QueryContainer | QueryContainer[]
  should?: QueryContainer | QueryContainer[]
  _name?: string
}
