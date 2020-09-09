class HasChildQuery extends QueryBase {
  ignore_unmapped: boolean;
  inner_hits: InnerHits;
  max_children: integer;
  min_children: integer;
  query: QueryContainer;
  score_mode: ChildScoreMode;
  type: RelationName;
}
