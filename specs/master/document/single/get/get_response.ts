
/**namespace:Document.Single.Get */
interface GetResponse<T> extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	_source: T;
	fields: Map<string, any>;
}