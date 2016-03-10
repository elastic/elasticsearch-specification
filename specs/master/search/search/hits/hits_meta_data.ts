
/**namespace:Search.Search.Hits */
interface HitsMetaData<T> {
	total: long;
	max_score: double;
	hits: Hit<T>[];
}