class FieldCapabilities {
  aggregatable: boolean;
  /** @prop_serializer IndicesFormatter */
  indices: Indices;
  meta: Dictionary<string, string[]>;
  /** @prop_serializer IndicesFormatter */
  non_aggregatable_indices: Indices;
  /** @prop_serializer IndicesFormatter */
  non_searchable_indices: Indices;
  searchable: boolean;
}
