
/**namespace:Search.Percolator.Percolate */
interface PercolateCountResponse extends Response {
	took: integer;
	total: long;
	_shards: ShardsMetaData;
	ServerError: ServerError;
}