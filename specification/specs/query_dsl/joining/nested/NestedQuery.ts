class NestedQuery extends QueryBase {
  ignore_unmapped: boolean;
  inner_hits: InnerHits;
  path: Field;
  query: QueryContainer;
  score_mode: NestedScoreMode;
}
