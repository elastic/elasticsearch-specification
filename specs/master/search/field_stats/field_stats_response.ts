
/**namespace:Search.FieldStats */
interface FieldStatsResponse extends Response {
	_shards: ShardsMetaData;
	indices: Map<string, FieldStats>;
}