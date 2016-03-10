
/**namespace:Document.Single.Delete */
interface DeleteResponse extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: string;
	found: boolean;
}