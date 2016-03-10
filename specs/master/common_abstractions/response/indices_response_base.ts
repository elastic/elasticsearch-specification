
/**namespace:CommonAbstractions.Response */
interface IndicesResponseBase extends Response {
	acknowledged: boolean;
	_shards: ShardsMetaData;
}