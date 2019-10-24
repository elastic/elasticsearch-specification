class GetCategoriesResponse extends ResponseBase implements IResponse {
	categories: CategoryDefinition[];
	count: long;
}
