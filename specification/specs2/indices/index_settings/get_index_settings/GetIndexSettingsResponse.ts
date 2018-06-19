class GetIndexSettingsResponse extends DictionaryResponseBase<IndexName, IndexState> {
	indices: Map<IndexName, IndexState>;
}
