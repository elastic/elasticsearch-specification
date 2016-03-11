
/**namespace:Search.Search.Hits */
interface hits_meta_data<t> {
	total: long;
	max_score: double;
	hits: hit<t>[];
}