class InlineGet<TDocument> {
  fields: Dictionary<string, LazyDocument>;
  found: boolean;
  _seq_no: long;
  _primary_term: long;
  /** @prop_serializer SourceFormatter`1 */
  _source: TDocument;
}
