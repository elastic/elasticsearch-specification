class SearchInputRequest {
  body?: SearchRequest
  indices?: IndexName[]
  indices_options?: IndicesOptions
  search_type?: SearchType
  template?: SearchTemplateRequest
}
