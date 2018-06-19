class SearchInputRequest {
	indices: IndexName[];
	types: TypeName[];
	search_type: SearchType;
	indices_options: IndicesOptions;
	body: SearchRequest;
	template: SearchTemplateRequest;
}
