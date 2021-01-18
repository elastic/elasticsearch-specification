class HitsMetadata<T> {
  total?: TotalHits | long;
  hits: Hit<T>[];

  max_score?: double;
}
