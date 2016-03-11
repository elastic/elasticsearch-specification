
/**namespace:Document.Single.Delete */
interface delete_response extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: string;
	found: boolean;
}