class GetFieldMappingResponse extends DictionaryResponseBase<IndexName, TypeFieldMappings> {
	indices: Dictionary<IndexName, TypeFieldMappings>[];
	is_valid: boolean;
}
