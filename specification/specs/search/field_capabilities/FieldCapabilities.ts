class FieldCapabilities {
	aggregatable: boolean;
	indices: Indices;
	non_aggregatable_indices: Indices;
	non_searchable_indices: Indices;
	searchable: boolean;
	meta: Dictionary<string, string[]>;
}
