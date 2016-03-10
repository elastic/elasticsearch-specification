
/**namespace:Indices.Monitoring.IndicesStats */
interface IndicesStatsResponse extends Response {
	_shards: ShardsMetaData;
	_all: IndicesStats;
	/**custom_serialization */
	indices: Map<string, IndicesStats>;
}