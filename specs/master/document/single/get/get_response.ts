
/**namespace:Document.Single.Get */
interface get_response<t> extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	_source: t;
	fields: map<string, any>[];
}