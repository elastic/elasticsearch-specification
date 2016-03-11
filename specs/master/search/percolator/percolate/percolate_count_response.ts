
/**namespace:Search.Percolator.Percolate */
interface percolate_count_response extends response {
	took: integer;
	total: long;
	_shards: shards_meta_data;
	ServerError: server_error;
}