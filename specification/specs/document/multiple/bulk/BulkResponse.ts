class BulkResponse extends ResponseBase implements IResponse {
	errors: boolean;
	items: BulkResponseItemContainer[];
	took: long;
}
