class SearchResponse<TDocument> extends ResponseBase {
  took: long;
  timed_out: boolean;
  _shards: ShardStatistics;
  hits: HitsMetadata<TDocument>;

  aggregations?: Dictionary<AggregateName, Aggregate>;
  _clusters?: ClusterStatistics;
  documents?: TDocument[];
  fields?: Dictionary<string, LazyDocument>;
  max_score?: double;
  num_reduce_phases?: long;
  profile?: Profile;
  pit_id?: string;
  _scroll_id?: string;
  suggest?: SuggestDictionary<TDocument>;
  terminated_early?: boolean;
}
