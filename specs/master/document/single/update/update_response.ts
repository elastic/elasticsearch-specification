
/**namespace:Document.Single.Update */
interface update_response<t> extends response {
	_shards: shards_meta_data;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: instant_get<t>;
}