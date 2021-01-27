class InnerHitsMetadata {
  total: TotalHits | long
  hits: Hit<LazyDocument>[]

  max_score?: double
}
