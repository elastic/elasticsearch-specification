
/**namespace:Document.Single.Index */
interface IndexResponse extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	created: boolean;
}