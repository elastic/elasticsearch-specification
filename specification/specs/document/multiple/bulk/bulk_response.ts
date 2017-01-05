
/**namespace:Document.Multiple.Bulk */
interface bulk_response extends response {
	IsValid: boolean;
	took: integer;
	errors: boolean;
	items: bulk_response_item_base[];
	ItemsWithErrors: bulk_response_item_base[];
}