
/**namespace:Search.Count */
interface CountResponse extends Response {
	count: long;
	_shards: ShardsMetaData;
}