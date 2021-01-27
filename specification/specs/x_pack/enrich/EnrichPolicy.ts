class EnrichPolicy {
  enrich_fields: Field[]
  /** @prop_serializer IndicesFormatter */
  indices: Indices
  match_field: Field
  query: string
}
