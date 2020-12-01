class Hit<TDocument> {
  _explanation: Explanation;
  fields: Dictionary<string, LazyDocument>;
  highlight: Dictionary<string, string[]>;
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  inner_hits: Dictionary<string, InnerHitsResult>;
  matched_queries: string[];
  _index: IndexName;
  _id: Id;
  _source: TDocument;
  _nested: NestedIdentity;
  _score: double;
  sort: Array<number | string>;
}
