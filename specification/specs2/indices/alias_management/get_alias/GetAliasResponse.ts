class GetAliasResponse extends DictionaryResponseBase<IndexName, IndexAliases> {
	indices: Map<IndexName, IndexAliases>;
	is_valid: boolean;
}
