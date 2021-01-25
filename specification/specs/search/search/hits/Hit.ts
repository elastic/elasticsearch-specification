class Hit<TDocument> {
  _index: IndexName;
  _id: Id;

  _score?: double;
  _type?: TypeName;

  _explanation?: Explanation;
  fields?: Dictionary<string, LazyDocument>;
  highlight?: Dictionary<string, string[]>;
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  inner_hits?: Dictionary<string, InnerHitsResult>;
  matched_queries?: string[];
  _nested?: NestedIdentity;
  _ignored?: string[];

  _shard?: string;
  _node?: string;
  _routing?: string;
  _source?: TDocument;
  _seq_no?: long;
  _primary_term?: long;
  _version?: long;
  sort?: Array<long | double | string>;
}
