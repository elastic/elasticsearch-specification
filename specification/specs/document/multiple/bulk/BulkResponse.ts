class BulkResponse extends ResponseBase {
  errors: boolean;
  items: BulkResponseItemContainer[];
  took: long;
}
