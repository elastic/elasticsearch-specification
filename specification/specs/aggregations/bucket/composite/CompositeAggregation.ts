class CompositeAggregation {
  after?: Dictionary<string, string | float>;
  size?: integer;
  sources?: Array<Dictionary<string, CompositeAggregationSource>>;
}
