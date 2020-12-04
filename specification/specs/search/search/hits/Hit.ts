class Hit<TDocument> {
  _explanation: Explanation;
  fields: Dictionary<string, LazyDocument>;
  highlight: Dictionary<string, string[]>;
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  inner_hits: Dictionary<string, InnerHitsResult>;
  matched_queries: string[];
  _nested: NestedIdentity;
  sort: Array<number | string>;
  _ignored: string[];

  _index: IndexName;
  _id: Id;
  _shard: string;
  _node: string;
  _source: TDocument;
  _seq_no: long;
  _primary_term: long;
  _score: double;
  _version: long;
}
