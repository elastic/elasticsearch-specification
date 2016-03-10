
/**namespace:Search.Search.Hits */
interface InnerHitsMetaData {
	total: long;
	max_score: double;
	hits: Hit<LazyDocument>[];
}