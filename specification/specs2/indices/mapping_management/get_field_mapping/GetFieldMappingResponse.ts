class GetFieldMappingResponse extends DictionaryResponseBase<IndexName, TypeFieldMappings> {
	indices: Map<IndexName, TypeFieldMappings>;
	is_valid: boolean;
}
