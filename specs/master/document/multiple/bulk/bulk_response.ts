
/**namespace:Document.Multiple.Bulk */
interface BulkResponse extends Response {
	IsValid: boolean;
	took: integer;
	errors: boolean;
	items: BulkResponseItemBase[];
	ItemsWithErrors: BulkResponseItemBase[];
}