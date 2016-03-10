
/**namespace:Indices.Monitoring.IndicesSegments */
interface SegmentsResponse extends Response {
	_shards: ShardsMetaData;
	/**custom_serialization */
	indices: Map<string, IndexSegment>;
}