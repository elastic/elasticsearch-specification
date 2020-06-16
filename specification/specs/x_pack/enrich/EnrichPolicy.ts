class EnrichPolicy {
	@prop_serializer("IndicesFormatter")
	indices: Indices;
	match_field: Field;
	enrich_fields: Field[];
	query: string;
}
