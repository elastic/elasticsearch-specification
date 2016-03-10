
/**namespace:Document.Single.Update */
interface UpdateResponse<T> extends Response {
	_shards: ShardsMetaData;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: InstantGet<T>;
}