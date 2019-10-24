class BulkResponse extends ResponseBase implements IResponse {
	errors: boolean;
	is_valid: boolean;
	items: BulkResponseItemBase[];
	items_with_errors: BulkResponseItemBase[];
	took: long;
}
