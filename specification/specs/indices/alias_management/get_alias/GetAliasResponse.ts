class GetAliasResponse extends DictionaryResponseBase<IndexName, IndexAliases> {
	indices: Dictionary<IndexName, IndexAliases>[];
	is_valid: boolean;
}
