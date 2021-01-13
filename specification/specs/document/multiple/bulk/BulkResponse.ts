/**
 * @type_stability stable
 */
class BulkResponse extends ResponseBase {
  errors: boolean;
  items: BulkResponseItemContainer[];
  took: long;
  ingest_took?: long;
}
