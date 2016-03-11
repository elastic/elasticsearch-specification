
/**namespace:Document.Single.Index */
interface index_response extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	created: boolean;
}