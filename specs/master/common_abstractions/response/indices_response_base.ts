
/**namespace:CommonAbstractions.Response */
interface indices_response_base extends response {
	acknowledged: boolean;
	_shards: shards_meta_data;
}