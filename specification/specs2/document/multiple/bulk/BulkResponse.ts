class BulkResponse extends ResponseBase {
	is_valid: boolean;
	took: long;
	errors: boolean;
	items: BulkResponseItem[];
	items_with_errors: BulkResponseItem[];
}
