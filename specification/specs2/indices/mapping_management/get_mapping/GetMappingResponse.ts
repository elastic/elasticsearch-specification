class GetMappingResponse extends DictionaryResponseBase<IndexName, IndexMappings> {
	indices: Map<IndexName, IndexMappings>;
	mappings: Map<IndexName, IndexMappings>;
	mapping: TypeMapping;
}
