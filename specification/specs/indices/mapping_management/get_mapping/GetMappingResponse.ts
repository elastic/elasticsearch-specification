class GetMappingResponse extends DictionaryResponseBase<IndexName, IndexMappings> {
	indices: Dictionary<IndexName, IndexMappings>[];
	mappings: Dictionary<IndexName, IndexMappings>[];
	mapping: TypeMapping;
}
